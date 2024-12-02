const {createGemini} = require('./gemini_core');
const {key} = require('./gemini_api_key.json');
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const {
  getCurrentSeqId,
  getNextSeqId,
  resetNextSeqId
} = require('./lib/queries');

const RULE_INSTRUCTION = `
  앞으로 입력되는 텍스트들을 json array로 만들어주세요.
  "##############################"를 기준으로 하나의 json을 만듭니다.
  json output의 key값은 한글로 출력해주세요. 
  가능한 아래와 같은 형식 유지부탁
  {
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
    "배우자": "타니 루미코(1979년 8월 12일생)",
    "결혼일": "2006년 10월 21일",
    "자녀": [
      {"이름": "김태양", "출생년도": 2007},
      {"이름": "김도윤", "출생년도": 2008},
      {"이름": "김담율", "출생년도": 2013}
    ],
    "반려동물": "반려견 키키",
    "병역": "대한민국 육군 병장 만기전역",
    "데뷔": {
      "일자": "1992년 7월 27일",
      "작품": "드라마 4일간의 사랑 OST '그대 사랑안에 머물러'"
    },
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
  "가족"이라는 key는 만들지 말고 "배우자", "자녀" 이런 key로 flat하게 만들어줘.
  "이름" key는 꼭 만들어 줘.
  값이 null인 key/value는 만들지 말아줘.
  위 샘플에 없는 key는 만들지 말아줘.
  "링크"는 만들지 말아줘.
  이 프롬프트의 결과는 그냥 'instruction setup done'으로 보내줘
`

const readFile = async (inFile) => {
  const fileContents = await fs.promises.readFile(inFile)
  const trimmed = fileContents.toString().split('\n').filter(line => line.trim() !== '').join('\n');
  return trimmed
}

const initChatSeesion = async (options) => {
  const genAI = createGemini(key);
  const model = await genAI.createNormalModel(options);
  const chatSession = genAI.startNewChat(model);
  return {genAI, chatSession};
}

const askQuestion = (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main (systemInstruction) {

  let srcFiles;
  try {
    const txtPath = 'd:/002.Code/002.node/crawl-wiki/images/배우/한국';
    const txtFiles = await fs.promises.readdir(txtPath);
    srcFiles = txtFiles.filter(fname => /\.txt$/.test(fname)).map(fname => path.join(txtPath, fname));
  } catch (err) {
    console.error('list target files error:', err)
    process.exit();
  }

  console.log('number of files =', srcFiles.length);

  const options = {
    model: 'flash-8B',
    systemInstruction
  }
  const {genAI, chatSeesion} = await initChatSeesion(options)

  await genAI.sendChatMessage(chatSeesion, RULE_INSTRUCTION);
  console.log('ready!');

  const mode = await askQuestion('choose mode: one by one(1), batch prrocess(2)\n')
  console.log('your choice is ', mode);

  let targetFiles;
  if(parseInt(mode) === 1){
    const fname = await askQuestion('input file name(fullPath): \n')
    targetFiles = [fname];
  } else {
    const fromIndex = await askQuestion('type from Index(number): \n');
    const count = await askQuestion('type from number of files to process(number): \n');
    targetFiles = [
      ...srcFiles.slice(parseInt(fromIndex)-1, parseInt(fromIndex)+parseInt(count)-1)
    ]
  }
  const merged = await Promise.all(targetFiles.map(async targetFile => {
    return await readFile(targetFile);
  }))
  const mergedString = merged.join('\n##############################\n');
  console.log('length of strings = ', mergedString.length)

  try {
    // process.stdin.on('data', async (line) => {
      // const fname = line.toString().trim();
      // const inFile = path.join(txtPath, fname);
      try {
        // const trimmed = await readFile(inFile);
        // const result = await genAI.sendChatMessage(chatSeesion, trimmed)
        const result = await genAI.sendChatMessage(chatSeesion, mergedString)
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    // })
  } catch (err) {
    console.error(err);
  }
}

const SYSTEM_INSTRUCTION = ``
main(SYSTEM_INSTRUCTION);