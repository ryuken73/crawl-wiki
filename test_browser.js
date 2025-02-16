const path = require('path');
const {create, setLevel} = require('./lib/logger')();
const createBrowser = require('./lib/browser');
const fileUtil = require('./lib/util');
const crawl_config = require('./crawl_config.json');
const {
  dbGetNextSeqId,
  dbIsDuplicateRecord
} = require('./lib/queries');

require('dotenv').config()
const RUN_MODE = process.env.RUN_MODE;

const WIKI_URL = 'https://namu.wiki'
const URL = 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:%ED%95%9C%EA%B5%AD%20%EC%97%AC%EC%84%B1%20%EB%AA%A8%EB%8D%B8';
const URL_2000 = 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:2000%EB%85%84%20%EC%B6%9C%EC%83%9D'
const URL_2006 = 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:2006%EB%85%84%20%EC%B6%9C%EC%83%9D'
const URL_2021 = 'https://namu.wiki/w/%EB%B6%84%EB%A5%98:2021%EB%85%84%20%EC%B6%9C%EC%83%9D'
const WIKI_CATEGORY_IDS = {
  'DOCUMENTS': 'category-문서',
  'CLASSES': 'category-분류',
}
const DB_CONTENT_SEQUENCE_NAME = 'person.content_id_seq'
const DB_IMAGE_SEQUENCE_NAME = 'person.image_id_seq'
// const filterRule = /[0-9]/;
// const filterRule = /.*/;
const {
  SAVE_PATH,
} = crawl_config;
const {
  sanitizeFname,
  saveImageToTemp,
  wikiSaveContentToFile,
  wikiSaveImageMetaToFile
} = fileUtil

const CRAWL_START_URLS = [
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
    // crawlCategory: WIKI_CATEGORY_IDS.DOCUMENTS
  },

]

const getNextId = async (options) => {
  try {
    const {personIdPrefix, listText, idType} = options;
    const type = idType === 'content' ?  "C" : "I";
    const dbSeqName = idType === 'content' ? DB_CONTENT_SEQUENCE_NAME:DB_IMAGE_SEQUENCE_NAME;
    const dbNextSequence = await dbGetNextSeqId(dbSeqName);
    const sanitizedFname = sanitizeFname(listText);
    const uniqId = `${personIdPrefix}_${type}_${dbNextSequence}_${sanitizedFname}`;
    return uniqId;
  } catch (err) {
    throw err;
  }
}

const getImageFname = (imageId, subDir) => {
  return path.join(SAVE_PATH, subDir, `${imageId}.webp`)
}
const getContentFnameTemp = (contentId, tempFolder) => {
  return path.join(tempFolder, `${contentId}.json`)
}

const processWikiList = async (browser, list, personIdPrefix, tempFolder, shouldMakeLinkUrl) => {
  let success=0; 
  let failure=0; 
  let duplicate=0;
  let processed=0;
  while(list.length > 0){
    // logger.info('list remain:', list.length);
    processed = failure + success;
    logger.info(`total: ${list.length}, processed: ${processed}, success: ${success}, failure: ${failure}, duplicate: ${duplicate}`)
    const listItem = list.shift();
    const {
      firstLink,
      listText: nameFromList,
      linkHref: linkHrefFromListProps
    } = await browser.wikiGetListProps(listItem)
    const linkHref = shouldMakeLinkUrl ? browser.wikiMakeUrlByText(nameFromList) : linkHrefFromListProps;
    const nameFromHref = decodeURI(linkHref.split('/').pop()).replace('(','_').replace(')', '');
    const listText = nameFromList === nameFromHref ? nameFromList: nameFromHref;
    try {
      logger.info('[start]', listText, linkHref)
      const alreadCrawled = await dbIsDuplicateRecord(linkHref);
      if(alreadCrawled){
        logger.info('already exists in DB:', listText);
        duplicate++;
        continue;
      }
    } catch (err) {
      logger.error(err.message, listText)
      logger.error('fail to check already crawled', listText);
      failure++;
    }
    try {
      const personPage = shouldMakeLinkUrl ?
        await browser.openChildPageByUrl(linkHref) :
        await browser.openChildPageByClickLink(firstLink);
      const pageLoaded = await browser.wikiWaitForPersonPage(personPage, listText);
      if(!pageLoaded){
        logger.error(`page not loaded:${listText}:${linkHref}`)
        failure++;
        continue
      }
      // get contents, image url and image body
      const contents = await browser.wikiGetContents(personPage);
      const {imgUrl, imgBody} = await browser.wikiGetImageData(personPage);

      // save image to temp folder
      const {saveImageResult, tmpImageName} = await saveImageToTemp(imgBody, listText, tempFolder)
      if(saveImageResult === false){
        logger.error(`save image to temp dir failed:${listText}:${linkHref}`)
        continue
      }

      // save content to text file in temp foler
      const contentId = await getNextId({personIdPrefix, listText, idType: 'content'})
      const contentFname = getContentFnameTemp(contentId, tempFolder);
      const contentsBlankLineRemoved = await wikiSaveContentToFile(contentFname, {
        action: 'INSERT',
        contentId,
        listText,
        linkHref,
        contents,
        personIdPrefix
      });
      logger.info('content first 4 lines:', contentsBlankLineRemoved.split('\n').slice(0,4).join(':'));

      // get next imageId and make full image path and name
      const imageId = await getNextId({personIdPrefix, listText, idType: 'image'})
      logger.info('imageId =', imageId)
      const subDir = personIdPrefix;
      // const imageFname = getImageFname(imageId, subDir);

      // move temp image to permanent directory
      // logger.info(`move file from=${tmpImageName}, to=${imageFname}`)
      // const renameSuccess = await utilMoveFile(tmpImageName, imageFname);
      // if(renameSuccess === false){
      //   logger.error(`move temp file to working failed:${tmpImageName}:${imageFname}`)
      //   failure++;
      //   continue
      // }

      // save image meta to text file
      logger.info('imgUrl:',imgUrl);
      await wikiSaveImageMetaToFile(tmpImageName, {
        action: 'INSERT',
        imageId,
        contentId,
        subDir,
        imgUrl,
        tempFolder
      })
      success++
      logger.info('[end]', listText)
      browser.closeChildPage();
    } catch (err) {
      // logger.error(err)
      logger.error(err.message, listText)
      logger.error('fail to process person', listText);
      failure++;
      browser.closeChildPage();
    }
  }
  return
}

let logger;

async function main(crawlInfo) {
  const {
    startPageUrl,
    personPageLinksRegExp,
    personIdPrefix,
    crawlCategory
  } = crawlInfo
  let tempFolder = fileUtil.getDefaultTempFolder();

  if(RUN_MODE !== 'TEMP'){
    try {
      const folderCreated = await fileUtil.prepareTempFoler();
      if(folderCreated){
        tempFolder = folderCreated
        console.log('working folder =', tempFolder);
      } else {
        console.error('error to create temp folder. exit program..', folderCreated)
        process.exit();
      }
    } catch (err) {
      console.error('error to create temp folder. exit program..')
      process.exit();
    }
  }
  logger = create({logFile:path.join(tempFolder, 'crawl_wiki.log')});
  const options = {
    savePath: SAVE_PATH,
    logger
  }

  const browser = await createBrowser(startPageUrl, options);
  const list = await browser.getListWithLinkInArray({
    regexp: personPageLinksRegExp,
    id: crawlCategory
    // id: WIKI_CATEGORY_IDS.DOCUMENTS
  });
  const shouldMakeLinkUrl = crawlCategory === WIKI_CATEGORY_IDS.CLASSES;
  await processWikiList(browser, list, personIdPrefix, tempFolder, shouldMakeLinkUrl)

  console.log('done')
  // const buttons = await browser.getButtonsInLocatorArray();
  while(true){
    const buttonHrefRegExp = shouldMakeLinkUrl ? /namespace=분류.*cfrom=/:/namespace=문서.*cfrom=/;
    const nextButton = await browser.wikiGetNextButton(buttonHrefRegExp);
    console.log(nextButton)
    if(nextButton === null){
      logger.info('all process done')
      break;
    }
    await browser.clickLinkAndWait(nextButton);
    const list = await browser.getListWithLinkInArray({
      regexp: personPageLinksRegExp,
      id: crawlCategory
      // id: WIKI_CATEGORY_IDS.DOCUMENTS
    });
    await processWikiList(browser, list, personIdPrefix, tempFolder, shouldMakeLinkUrl)
  }
  // process.exit();
}

async function crawl(startIndex, endIndex){
  while(startIndex < endIndex){
   await main(CRAWL_START_URLS[startIndex]);
   console.log('done:', startIndex);
   startIndex++
  }
}

crawl(2,6)
// crawl(0, CRAWL_START_URLS.length);

// let startIndex = 8;
// let endIndex = CRAWL_START_URLS.length;
// for (let i=startIndex; i < endIndex; i++){
//   main(CRAWL_START_URLS[i]);
// }