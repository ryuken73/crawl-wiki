const {create, setLevel} = require('./lib/logger')();
const logger = create({logFile:'crawl_wiki.log'});
const createBrowser = require('./lib/browser');
const crawl_config = require('./crawl_config.json');

const WIKI_URL = 'https://namu.wiki'
const URL = 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%ED%95%9C%EA%B5%AD%20%EC%97%AC%EC%84%B1%20%EB%AA%A8%EB%8D%B8';
const URL_2000 = 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:2000%EB%85%84%20%EC%B6%9C%EC%83%9D'
const WIKI_IDs = {
  'DOCUMENTS': 'category-문서',
  'CLASSES': 'category-분류',
}
const filterRule = /[0-9]/;
// const filterRule = /.*/;
const {SAVE_PATH} = crawl_config;

const processWikiList = async (browser, list) => {
  for(let item of list){
    console.log('item text:', await item.textContent());
  }
  while(list.length > 0){
    console.log(list.length)
    const listItem = list.shift();
    const {
      firstLink,
      listText,
    } = await browser.wikiGetListProps(listItem)
    try {
      logger.info('[start]', listText)
      const personPage = await browser.openChildPageByClickLink(firstLink);
      const pageLoaded = await browser.wikiWaitForPersonPage(personPage, listText);
      if(!pageLoaded){
        continue
      }
      const contents = await browser.wikiGetContents(personPage);
      const imgUrl = await browser.wikiGetImageUrl(personPage, listText);
      console.log(imgUrl);
      
      logger.info('[end]', listText)
      browser.closeChildPage();
    } catch (err) {
      logger.error('fail to process person', listText);
      console.error('fail to process person', listText);
      browser.closeChildPage();
      continue;
    }
  }
  return
}

async function main() {
  const options = {
    savePath: SAVE_PATH,
  }
  const browser = await createBrowser(URL, options);
  const list = await browser.getListWithLinkInArray({
    regexp: filterRule,
    id: WIKI_IDs.DOCUMENTS
  });
  await processWikiList(browser, list)

  console.log('done')
  // const buttons = await browser.getButtonsInLocatorArray();
  while(true){
    const nextButton = await browser.wikiGetNextButton();
    console.log(nextButton)
    if(nextButton === null){
      logger.info('all process done')
      break;
    }
    await browser.clickLinkAndWait(nextButton);
    const list = await browser.getListWithLinkInArray({
      regexp: filterRule,
      id: WIKI_IDs.DOCUMENTS
    });
    await processWikiList(browser, list)
  }
  process.exit();
}

main();