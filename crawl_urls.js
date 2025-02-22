const WIKI_CATEGORY_IDS = {
  'DOCUMENTS': 'category-문서',
  'CLASSES': 'category-분류',
}
module.exports = [
  {//0
    startPageUrl: 'https://namu.wiki/w/%EB%B0%B0%EC%9A%B0/%ED%95%9C%EA%B5%AD',
    personIdPrefix: '배우_한국',
    personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    // personPageLinksRegExp: /.*/, 
    // personPageLinksRegExp: /공명/
    // personPageLinksRegExp: /김기현/
    // personPageLinksRegExp: /박수영/
    // personPageLinksRegExp: /김용운/
    // personPageLinksRegExp: /강승원/
  },
  {//1
    startPageUrl: 'https://namu.wiki/w/%EA%B0%80%EC%88%98/%ED%95%9C%EA%B5%AD',
    personIdPrefix: '가수_한국',
    personPageLinksRegExp: /.*/, 

  },
  {//2
    startPageUrl: 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98%20%EB%82%A8%EC%84%B1%20%EC%A0%95%EC%B9%98%EC%9D%B8',
    personIdPrefix: '정치인_한국',
    personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    crawlCategory: WIKI_CATEGORY_IDS.CLASSES
  },
  {//3
    startPageUrl: 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98%20%EB%82%A8%EC%84%B1%20%EC%A0%95%EC%B9%98%EC%9D%B8',
    personIdPrefix: '정치인_한국',
    personPageLinksRegExp: /.*/,
    // personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    crawlCategory: WIKI_CATEGORY_IDS.DOCUMENTS
  },
  { // 여성 4
    startPageUrl: 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98%20%EC%97%AC%EC%84%B1%20%EC%A0%95%EC%B9%98%EC%9D%B8',
    personIdPrefix: '정치인_한국',
    personPageLinksRegExp: /.*/,
    // personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    crawlCategory: WIKI_CATEGORY_IDS.CLASSES
  },
  { // 여성 5
    startPageUrl: 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98%20%EC%97%AC%EC%84%B1%20%EC%A0%95%EC%B9%98%EC%9D%B8',
    personIdPrefix: '정치인_한국',
    personPageLinksRegExp: /.*/,
    // personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    crawlCategory: WIKI_CATEGORY_IDS.DOCUMENTS
  },
  { // 축구선수  6 
    startPageUrl: 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98%20%EB%82%A8%EC%9E%90%20%EC%B6%95%EA%B5%AC%20%EC%84%A0%EC%88%98',
    personIdPrefix: '축구선수_한국',
    personPageLinksRegExp: /.*/,
    // personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    crawlCategory: WIKI_CATEGORY_IDS.CLASSES
  },
  { // 축구선수  7
    startPageUrl: 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98%20%EB%82%A8%EC%9E%90%20%EC%B6%95%EA%B5%AC%20%EC%84%A0%EC%88%98',
    personIdPrefix: '축구선수_한국',
    personPageLinksRegExp: /.*/,
    // personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    crawlCategory: WIKI_CATEGORY_IDS.DOCUMENTS
  },
  { // 언론인(남성) 8 
    startPageUrl: 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98%20%EB%82%A8%EC%84%B1%20%EC%96%B8%EB%A1%A0%EC%9D%B8',
    personIdPrefix: '언론인_한국',
    personPageLinksRegExp: /.*/,
    // personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    crawlCategory: WIKI_CATEGORY_IDS.CLASSES
  },
  { // 언론인(남성) 9 
    startPageUrl: 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98%20%EB%82%A8%EC%84%B1%20%EC%96%B8%EB%A1%A0%EC%9D%B8',
    personIdPrefix: '언론인_한국',
    personPageLinksRegExp: /.*/,
    // personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    crawlCategory: WIKI_CATEGORY_IDS.DOCUMENTS
  },
  { // 언론인(여성) 10 
    startPageUrl: 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98%20%EC%97%AC%EC%84%B1%20%EC%96%B8%EB%A1%A0%EC%9D%B8',
    personIdPrefix: '언론인_한국',
    personPageLinksRegExp: /.*/,
    // personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    crawlCategory: WIKI_CATEGORY_IDS.CLASSES
  },
  { // 언론인(여성)  11
    startPageUrl: 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98%20%EC%97%AC%EC%84%B1%20%EC%96%B8%EB%A1%A0%EC%9D%B8',
    personIdPrefix: '언론인_한국',
    personPageLinksRegExp: /.*/,
    // personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    crawlCategory: WIKI_CATEGORY_IDS.DOCUMENTS
  },
  { // 법조인  12
    startPageUrl: 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98%20%EB%B2%95%EC%A1%B0%EC%9D%B8',
    personIdPrefix: '법조인_한국',
    personPageLinksRegExp: /.*/,
    // personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    crawlCategory: WIKI_CATEGORY_IDS.CLASSES
  },
  { // 법조인  13
    startPageUrl: 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98%20%EB%B2%95%EC%A1%B0%EC%9D%B8',
    personIdPrefix: '법조인_한국',
    personPageLinksRegExp: /.*/,
    // personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    crawlCategory: WIKI_CATEGORY_IDS.DOCUMENTS
  },
  { // 유튜버  14(여)
    startPageUrl: 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98%20%EC%97%AC%EC%84%B1%20%EC%9C%A0%ED%8A%9C%EB%B2%84',
    personIdPrefix: '유튜버_한국',
    personPageLinksRegExp: /.*/,
    // personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    pageHasSubCategory: true
  },
  { // 유튜버  15(남)
    startPageUrl: 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98%20%EB%82%A8%EC%84%B1%20%EC%9C%A0%ED%8A%9C%EB%B2%84',
    personIdPrefix: '유튜버_한국',
    personPageLinksRegExp: /.*/,
    // personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    pageHasSubCategory: true
  },
  { // 코미디언  16(남)
    startPageUrl: 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%ED%95%9C%EA%B5%AD%20%EB%82%A8%EC%84%B1%20%EC%BD%94%EB%AF%B8%EB%94%94%EC%96%B8',
    personIdPrefix: '코미디언_한국',
    personPageLinksRegExp: /.*/,
    // personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    pageHasSubCategory: true
  },
  { // 코미디언  17(여)
    startPageUrl: 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%ED%95%9C%EA%B5%AD%20%EC%97%AC%EC%84%B1%20%EC%BD%94%EB%AF%B8%EB%94%94%EC%96%B8',
    personIdPrefix: '코미디언_한국',
    personPageLinksRegExp: /.*/,
    // personPageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    pageHasSubCategory: true
  },

]