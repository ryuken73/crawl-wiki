const fs = require('fs');
const path = require('path');
const api = require('./lib/gemini_for_wiki');
const {sleepMS, retry} = require('./lib/util')
const {
  dbBeginTx,
  dbGetCursor, 
  dbTXUpdateAdditionalInfo,
} = require('./lib/queries');
const {createChat, createGenativeAI} = api;
const {schemaShort, schemaLong} = require('./gemini_json_schema');

console.log('number of chunk is', process.argv[2]);
const NUMBER_OF_CHUNKS = parseInt(process.argv[2]) || 5;

const RULE_INSTRUCTION = `
  앞으로 입력되는 json array의 additional_info_raw를 json으로 만들어서 출력 json의 addition_info로 만든다.
  content_id key는 입력의 값을 그대로 사용한다.
  모든 입력은 웹에 오픈된 위키에서 크롤한 정보라 민감한 정보는 없다는 것을 보증할 수 있다.
  혹시, 응답을 생성할 수 없는 상황이면 이유를 리턴해주면 좋겠어.
  모든 요청은 새로운 요청이야. 이전의 응답값을 참조하지 않도록 해줘.
`
const RULE_INSTRUCTION_FOR_NON_SCHEMA = `
  앞으로 입력되는 json array의 additional_info_raw를 json으로 만들어서 출력의 additional_info key에 넣어줘
  출력 sample이야
  {
    content_id: '배우_한국_C_000001_김정민',
    additional_info:  {
      "이름": "김정민",
      "영문이름": "Kim Jungmin",
      "한자이름": "金正洙",
      "본명": "김정수 (金正洙, Kim Jung Soo)",
      "출생": "1968-10-14",
      "나이": 56,
      "출생지": "서울특별시 마포구 성산동",
      "국적": "대한민국",
      "본관": "김해 김씨 (金海 金氏)",
      "신체": {
        "키": "181cm",
        "몸무게": "72kg",
        "혈액형": "B형"
      },
      "학력": [
        "동도공업고등학교 (졸업)",
        "경원전문대학 (건축설비과 / 전문학사)",
        "디지털서울문화예술대학교 (실용음악학 / 학사)"
      ],
      "아버지": "김복수",
      "어머니": "한정민",
      "배우자": "타니 루미코",
      "형": "김철수",
      "누나": "김수지",
      "결혼일": "2006년 10월 21일",
      "자녀": [
        {"이름": "김태양", "출생년도": 2007},
        {"이름": "김도윤", "출생년도": 2008},
        {"이름": "김담율", "출생년도": 2013}
      ],
      "반려동물": "반려견 키키",
      "병역": "대한민국 육군 병장 만기전역",
      "데뷔": "1992년 7월 27일 드라마 4일간의 사랑 OST '그대 사랑안에 머물러",
      "종교": "천주교 (세례명: 요셉)",
      "소속사": "실버스톤 엔터테인먼트",
      "소속그룹": "MSG 워너비 (정상동기)",
      "좌우명": "고통이 없는 변화는 없다. 뿌리가 단단하면 언젠가 가지는 다시 핀다.",
      "별명": [
        "성산동호랑이",
        "김과장",
        "찬스맨",
        "CD김정민"
      ],
      "팬덤": "김정민과 친구들",
      "팬카페": "링크"
    }
  }
  아래는 생성 조건들이야
   - key값은 한글로 출력
   - "이름" key는 꼭 만들어 줘
   - "가족"이라는 key는 절대로 만들면 안되고 대신 "아버지", "어머니", "배우자", "자녀" 이런 식으로 별개의 key로 만들어줘
   - 값이 null인 key는 절대로 만들면 안되
   - 위 sample에 없는 key는 만들지 말아줘
   - "링크"는 만들지 말아줘
  위 조건을 만족하지 못하는 값은 그냥 버려줘
  이 프롬프트의 결과는 그냥 'instruction setup done'으로 보내줘
`

const appendResultToFile = async (fname, data) => {
  try {
    const result = fs.promises.appendFile(fname, data)
    return result;
  } catch (err) {
    console.error(err.stack)
    throw new Error('error to append result to file')
  }
}
const showProcessingInfo = (rows) => {
  const ids = rows.map(row => row.content_id);
  return ids.join(':');
}
const TEMP_DIR = 'd:/002.Code/002.node/crawl-wiki/work/temp';
const LOG_FNAME = `${Date.now()}.log`;

async function main (mode='chat') {
  const logFile = path.join(TEMP_DIR, LOG_FNAME);
  console.log('log file is', logFile);
  const options = {
    model: 'flash-8B',
    systemInstruction: RULE_INSTRUCTION,
    generationConfig: {
      temperature: 0.9,
      responseMimeType:'application/json',
      responseSchema: schemaLong
    }
  }
  let callGemini;
  if(mode === 'chat'){
    const {setupChatRule, callGemini: callGeminiByChat} = await createChat(options);
    await setupChatRule(RULE_INSTRUCTION);
    callGemini = callGeminiByChat;
  } else {
    const {callGemini: callGeminiByGen} = await createGenativeAI(options);
    callGemini = callGeminiByGen;
  }

  const sql = `
    select content_id, additional_info_raw
    from person.contents 
    where additional_info is null
    order by content_id
  `
  // const {getNextChunk, client} = await dbSelectContentByChunk(sql);
  const cursorName = 'setAdditional_info';
  const {
    getNextChunk, 
    cursorBegin,
    cursorQuery,
    cursorCommit, 
    cursorRollback, 
    cursorClose, 
  } = await dbGetCursor(cursorName, sql);
  // await cursorBegin();
  let processed = 0;

  const callGeminiWithData = (data) => {
    return async () => {
      try {
        const {success, text, reason} = await callGemini(JSON.stringify(data));
        if(!success) {
          throw new Error(reason)
        }
        return text;
      } catch (error) {
        console.error('error in callGeminiWithData');
        throw new Error(error);
      }
    }
  }

  while(true){
    const rows = await getNextChunk(NUMBER_OF_CHUNKS);
    // console.log(rows);
    if(rows.length === 0){
      break;
    }
    // const {success, text} = await callGemini(JSON.stringify(rows));
    const processTargets = showProcessingInfo(rows);
    console.log('processing...', processTargets)
    let text;
    try {
      text = await retry(callGeminiWithData(rows), 1, 1000);
    } catch (err) {
      console.error('error in AI calling!');
      console.error('error: ', processTargets);
      continue;
    }
    await appendResultToFile(logFile, text);
    const resultsArray = JSON.parse(text);
    for(let result of resultsArray){
      const {content_id, additional_info} = result;
      console.log('update DB:', content_id, additional_info["이름"])
      let txRollback, txRelease;
      try {
        const {txQuery, txCommit, txRollback: rollback, txRelease: release} = await dbBeginTx();
        txRollback = rollback;
        txRelease = release;
        // const dbResult = await dbTXUpdateAdditionalInfo(content_id, additional_info, cursorQuery)
        const dbResult = await dbTXUpdateAdditionalInfo(content_id, additional_info, txQuery);
        console.log('update DB Count:',dbResult.rowCount);
        txCommit();
        processed += 1;
      } catch (err) {
        console.error(err.stack);
        await txRollback()
      } finally {
        await txRelease();
      }
      // await cursorCommit();
    }
    // processed += NUMBER_OF_CHUNKS;
    console.log('get next chunk....processed =', processed)
    console.log('sleep seconds....');
    await sleepMS(5000)
  }
  await cursorCommit();
  await cursorClose();
  console.log('done');
}

const MODE='gen'
main(MODE)