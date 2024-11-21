const {GoogleGenerativeAI} = require('@google/generative-ai');
const {GoogleAICacheManager} = require('@google/generative-ai/server');
const {key} = require('./gemini_api_key.json');
const fs = require('fs');
const path = require('path');

console.log(key)

const genAI = new GoogleGenerativeAI(key);
const cacheManager = new GoogleAICacheManager(key);
const MODELS = {
  'flash': 'gemini-1.5-flash',
  'flash-8B': 'gemini-1.5-flash-8b',
  'pro': 'gemini-1.5-pro',
}
const USE_CONTENT_CACHE = true;
const SYSTEM_INSTRUCTION = "입력과 같은 언어로 출력하세요."
const SYSTEM_INSTRUCTION_WITH_CONTENT_CACHE = 'ts 내용을 출력';
// const SYSTEM_INSTRUCTION_WITH_CONTENT_CACHE = 'cache된 내용을 참고해서 입력 텍스트를 json으로 출력해주세요';
const CONTENTS_INSTRUCTION_FOR_JSON = [
  {
    role: 'user',
    parts: 'json output의 key값은 한글로 출력해주세요.'
  },
  {
    role: 'user',
    parts: [
      {
        text: `
          샘플 output
          {
            "이름": "김정민",
            "영문이름": "Kim Jungmin",
            "한자이름": "金正洙",
            "본명": "김정수 (金正洙, Kim Jung Soo)",
            "출생": "1968년 10월 14일",
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
        `
      }
    ]
  },
  {
    role: 'user',
    parts: [
      {
        text: `
          "가족"이라는 key는 만들지 말고 "배우자", "자녀" 이런 key로 flat하게 만들어줘.
          "이름" key는 꼭 만들어 줘.
          값이 null인 key/value는 만들지 말아줘.
          위 샘플에 없는 key는 만들지 말아줘.
        `
      }
    ]
  }
]
const SYSTEM_INSTRUCTION_FOR_JSON = `json output의 key값은 한글로 출력해주세요. 가능한 아래와 같은 형식 유지
{
  "이름": "김정민",
  "영문이름": "Kim Jungmin",
  "한자이름": "金正洙",
  "본명": "김정수 (金正洙, Kim Jung Soo)",
  "출생": "1968년 10월 14일",
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
`
const GENERAL_CONFIG = {"response_mime_type": "application/json"}

const simpleFnc = async () => {

  const model = genAI.getGenerativeModel(
    {
      model:MODELS['flash-8B']
    }
  );
  const prompt = "AI가 무엇인지 설명부탁해";
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}

const startChat = async () => {
  const model = genAI.getGenerativeModel(
    {
      model:MODELS['flash-8B'],
      systemInstruction: SYSTEM_INSTRUCTION
    }
  );
  const chatSession = model.startChat({
    history: [],
  })
  process.stdin.on('data', async (data) => {
    const prompt = data.toString();
    console.log('[user]', prompt);
    const result = await chatSession.sendMessage(prompt);
    const {candidates, usageMetadata, text} = result.response;
    console.log('[gemini]number of candidates = ', candidates.length);
    candidates.forEach((candidate, i) => {
      console.log(`[gemini]candidate[${i}] detail = `, candidate.content)
    });
    console.log('[gemini]usage = ', usageMetadata);
    console.log('[gemini]text = ', text());
  })
}

const convertJSON = async (model, infoString, prompt) => {
  const request = `${prompt} \n ${infoString}`
  const result = await model.generateContent(request);
  const {candidates, usageMetadata, text} = result.response;
  candidates.forEach((candidate, i) => {
    console.log(`[gemini]candidate[${i}] detail = `, candidate.content)
  });
  console.log('[gemini]usage = ', usageMetadata);
  return result.response.text();
}

// simpleFnc();
// startChat();

const readFile = async (inFile) => {
  return fs.promises.readFile(inFile)
}
const createFastModel = () => {
  return genAI.getGenerativeModel(
    {
      model:MODELS['flash-8B'],
      systemInstruction: SYSTEM_INSTRUCTION_FOR_JSON
    }
  );
}

const createCachedModel = async (options) => {
  const {model, displayName, systemInstruction, ttl} = options;
  const cache = await cacheManager.create({
    model: MODELS[model],
    displayName,
    systemInstruction,
    ttlSeconds: ttl
  })
  return genAI.getGenerativeModelFromCachedContent(cache)
}

const isCacheExistes = async (cacheName) => {
  const listResult = await cacheManager.list();
  console.log(listResult.cachedContents)
  return listResult.cachedContents?.some(cachedContent => cachedContent.name === cacheName);
}

async function main(USE_CONTENT_CACHE) {
  USE_CONTENT_CACHE ? console.log('use content cache') : console.log('use system instrction cache');
  const txtPath = 'd:/002.Code/002.node/crawl-wiki/images/배우/한국';
  try {
    const cacheExists = await isCacheExistes('jsonCache');
    console.log('isCacheExists:', cacheExists);
    let model;
    if(!cacheExists){
      console.log('create new cache!')
      const defaultCacheOptions = {
        model: 'flash-8B',
        name: 'jsonCache',
        displayName: 'json convert instruction',
        ttl: 3600
      }
      const cacheOptions = USE_CONTENT_CACHE ? {
        ...defaultCacheOptions,
        systemInstruction: SYSTEM_INSTRUCTION_WITH_CONTENT_CACHE,
        contents: CONTENTS_INSTRUCTION_FOR_JSON
      } : {
        ...defaultCacheOptions,
        systemInstruction: SYSTEM_INSTRUCTION_FOR_JSON
      }
      model = await createCachedModel(cacheOptions);
    }
    process.stdin.on('data', async (line) => {
      const fname = line.toString().trim();
      const inFile = path.join(txtPath, fname);
      try {
        const fileContents = await readFile(inFile);
        const trimmed = fileContents.toString().split('\n').filter(line => line.trim() !== '').join('\n');
        // const prompt = '샘플 output을 참고해서 입력데이터를 json으로 바꿔줘';
        const prompt = '처리할 데이터';
        const result = await convertJSON(model, trimmed, prompt)
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    })
  } catch (err) {
    console.error(err)
  }
}

main(USE_CONTENT_CACHE);