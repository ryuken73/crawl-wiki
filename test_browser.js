const path = require('path');
const {create, setLevel} = require('./lib/logger')();
const logger = create({logFile:'crawl_wiki.log'});
const createBrowser = require('./lib/browser');
const fileUtil = require('./lib/util');
const crawl_config = require('./crawl_config.json');
const {
  dbGetNextSeqId
} = require('./lib/queries');

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
  utilDelBlankLine,
  utilSaveToFile,
  utilMoveFile
} = fileUtil

const CRAWL_START_URLS = [
  {
    startPageUrl: 'https://namu.wiki/w/%EB%B0%B0%EC%9A%B0/%ED%95%9C%EA%B5%AD',
    personIdPrefix: '배우_한국',
    // presonPageLinksRegExp: /.*/, 
    pageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    // personPageLinksRegExp: /감우성/
  }
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

const saveImageToTemp = async (imgBody, listText, tempFoloer) => {
  try {
    const timeStamp = Date.now();
    const sanitizedFname = sanitizeFname(listText);
    const fname = `${timeStamp}_${sanitizedFname}.webp`
    const tempFname = path.join(tempFoloer, fname);
    const result = await utilSaveToFile(imgBody, tempFname)
    if(result === true){
      return {
        saveImageResult: result,
        tmpImageName: tempFname
      }
    } else {
      return {
        saveImageToTemp: false
      }
    }
  } catch (err) {
      throw err;
  }
}

const saveContentToFile = async (content, fname) => {
  try {
    return await utilSaveToFile(content, fname)
  } catch (err) {
    throw err;
  }
}

const getImageFname = (imageId, subDir) => {
  return path.join(SAVE_PATH, subDir, `${imageId}.webp`)
}
const getContentFnameTemp = (contentId, tempFolder) => {
  return path.join(tempFolder, `${contentId}.txt`)
}

const sanitizeFname = (fname) => {
  const toRemoveChars = /['"() ]/g;
  const invalidChars = /[\\/:*?"<>\|\-]/g;
  return fname.replace(toRemoveChars, '').replace(invalidChars, '_').replace(/_+/g, '_');
}

const processWikiList = async (browser, list, personIdPrefix, tempFolder) => {
  // for(let item of list){
  //   console.log('item text:', await item.textContent());
  // }
  while(list.length > 0){
    logger.info('list remain:', list.length);
    const listItem = list.shift();
    const {
      firstLink,
      listText,
      linkHref
    } = await browser.wikiGetListProps(listItem)
    try {
      logger.info('[start]', listText)
      const personPage = await browser.openChildPageByClickLink(firstLink);
      const pageLoaded = await browser.wikiWaitForPersonPage(personPage, listText);
      if(!pageLoaded){
        logger.error(`page not loaded:${listText}:${linkHref}`)
        continue
      }
      const contents = await browser.wikiGetContents(personPage);
      const {imgUrl, imgBody} = await browser.wikiGetImageData(personPage);

      const {saveImageResult, tmpImageName} = await saveImageToTemp(imgBody, listText, tempFolder)
      if(saveImageResult === false){
        logger.error(`save image to temp dir failed:${listText}:${linkHref}`)
        continue
      }
      const imageId = await getNextId({personIdPrefix, listText, idType: 'image'})
      logger.info('imageId =', imageId)
      const imageFname = getImageFname(imageId, personIdPrefix);
      logger.info(`move file from=${tmpImageName}, to=${imageFname}`)
      const renameSuccess = await utilMoveFile(tmpImageName, imageFname);
      if(renameSuccess === false){
        logger.error(`move temp file to working failed:${tmpImageName}:${imageFname}`)
        continue
      }
      const contentId = await getNextId({personIdPrefix, listText, idType: 'content'})
      const contentFname = getContentFnameTemp(contentId, tempFolder);
      // const metaAppended = appendStrings([
      //   contentFromPage, 
      //   'uniqId', uniqId, 
      //   'imageName', savedFname,
      //   'imageUrl', imgUrl, 
      //   'contentUrl', contentUrl,
      //   'contentHash', contentHash,
      //   'imageHash', imageHash
      // ])
      await saveContentToFile(utilDelBlankLine(contents), contentFname)
      logger.info('content heading:', utilDelBlankLine(contents).slice(1,10));
      logger.info('imgUrl:',imgUrl);
      
      logger.info('[end]', listText)
      browser.closeChildPage();
    } catch (err) {
      console.error(err.message)
      logger.error('fail to process person', listText);
      console.error('fail to process person', listText);
      browser.closeChildPage();
    }
  }
  return
}

async function main(crawlInfo) {
  const options = {
    savePath: SAVE_PATH,
  }
  const {
    startPageUrl,
    personPageLinksRegExp,
    personIdPrefix
  } = crawlInfo
  let tempFolder;
  try {
    const folderCreated = await fileUtil.prepareTempFoler();
    if(folderCreated){
      tempFolder = folderCreated
      logger.info('working folder =', tempFolder);
    } else {
      logger.error('error to create temp folder. exit program..', folderCreated)
      process.exit();
    }
  } catch (err) {
    logger.error('error to create temp folder. exit program..')
    process.exit();
  }

  const browser = await createBrowser(startPageUrl, options);
  const list = await browser.getListWithLinkInArray({
    regexp: personPageLinksRegExp,
    // id: WIKI_CATEGORY_IDS.DOCUMENTS
  });
  await processWikiList(browser, list, personIdPrefix, tempFolder)

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
      regexp: personPageLinksRegExp,
      // id: WIKI_CATEGORY_IDS.DOCUMENTS
    });
    await processWikiList(browser, list, personIdPrefix, tempFolder)
  }
  process.exit();
}

main(CRAWL_START_URLS[0]);