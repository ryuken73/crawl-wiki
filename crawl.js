const { chromium } = require('playwright');
const { expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const {create, setLevel} = require('./lib/logger')();
const {addSuccess, checkSuccess} = require('./resultProcess');
const logger = create({logFile:'crawl_wiki.log'});
const crawl_config = require('./crawl_config.json');
const {
  getCurrentSeqId,
  getNextSeqId,
  resetNextSeqId,
  getPersonByContentUrl
} = require('./lib/queries');
const {getFileHash, getStringHash} = require('./lib/hashLib');

require('dotenv').config()

const RUN_MODE = process.env.RUN_MODE;
logger.info('###############################');
logger.info('## crawl mode is', RUN_MODE);
logger.info('###############################');

const {
  BASE_DIR
} = crawl_config;
// const SAVE_PATH = './images'
const HEADERS = /^(출생|국적|본관|신체|학력|가족|병력|데뷔|소속사|링크)$/
const PERSON_TABLE_HEADERS = /(출생|학력)/
const IS_HEADLESS = false;
const SAVE_TYPE = {
  image: 'IMAGE',
  text: 'TEXT'
}
const ADD_IF_NOT_DUP = true;

const CRAWL_URLS = [
  {
    pageHeader: '배우/한국',
    pageUrl: 'https://namu.wiki/w/%EB%B0%B0%EC%9A%B0/%ED%95%9C%EA%B5%AD',
    pageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    idPrefix: 'ACTOR_KOREA',
    dbSeqName: 'person.actor_id_seq'
    // pageLinksRegExp: /김현중/
    // pageLinksRegExp: /박유/
    // pageLinksRegExp: /한효주/
  },
  {
    pageHeader: '가수/한국',
    pageUrl: 'https://namu.wiki/w/%EA%B0%80%EC%88%98/%ED%95%9C%EA%B5%AD',
    // pageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    pageLinksRegExp: /.*/,
    idPrefix: 'SINGER_KOREA',
    dbSeqName: 'person.singer_id_seq'
  }
]

const isTableHeader = text => {
  return HEADERS.test(text);
}

const openHeadlessBrowser = async (options) => {
  const browser = await chromium.launchPersistentContext('', {
    headless: IS_HEADLESS,
    viewport: {
      width: 1500,
      height: 1000
    },
    screen: {
      width: 1500,
      height: 1000
    }
  })
  const page = await browser.newPage()
  return page
}

const getLinkInList = async (locator, regexp) => {
  // return locator.getByRole('listitem').filter({hasText: regexp}).all();
  return locator.getByRole('listitem').filter({has: await locator.getByRole('link')}).filter({hasText: regexp}).all();
}

const getPersonTable = async (page) => {
  const keyword1 = await page.getByRole('table').filter({hasText: /출생/});
  const keyword2 = await page.getByRole('table').filter({hasText: /국적/});
  try {
    table = await keyword1.or(keyword2);
    const fullText = await table.innerText({timeout: 5000});
    return fullText;
  } catch (err) {
    logger.error(err);  
    return '';
  }
}

const getImage = async (page, name) => {
  // const table = await page.getByRole('table').first();
  logger.info('get image path...')
  let table;
  try {
    const keyword1 = await page.getByRole('table').filter({hasText: /출생/});
    const keyword2 = await page.getByRole('table').filter({hasText: /국적/});
    table = await keyword1.or(keyword2);
    console.log(table)
    const images = await table.getByRole('img', {timeout: 1000});
    await expect.poll(async () => images.count()).toBeGreaterThan(0);
    const imgCount = await table.getByRole('img', {timeout: 1000}).count();
    logger.info('table count = ',await table.count());
    logger.info('image count = ',imgCount);
    const imgLocator = await table.getByRole('img', {timeout: 1000}).nth(1);
    const imgUrl =  await imgLocator.evaluate(ele => ele.src,'',{timeout: 1000});
    return { name, imgUrl };
  } catch(err) {
    console.error(err);
    return { name, imgUrl: 'none'};
  }
};
const savePersonInfo = async(fullText, fname) => {
  fs.writeFile(fname, fullText, (err) => {
    if(err) throw err;
    logger.info('save personInfo success:', fname)
  })
}
const saveImageFromUrl = async (url, fname) => {
  const response = await axios.get(url, {responseType: 'arraybuffer'});
  fs.writeFile(fname, response.data, (err) => {
    if(err) throw err;
    logger.info('save image success:', fname)
  })
}

const sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, time)
  }) 
}
const getLinkNText = async locator => {
  const fullName = await locator.textContent();
  const sanitizedFname = sanitizeFname(fullName);
  const link = await locator.getByRole('link');
  const count = await locator.getByRole('link').count();
  logger.info('get link and name:', fullName, count);
  const clickableLink = count > 1 ? link.first(): link;
  const clickableText = count > 1 ? await link.first().textContent(): fullName;
  return {clickableLink, clickableText, fullName: sanitizedFname}
}
const waitForPersonPage = async (page, name) => {
  const escapeRegExp = (input) => {
    return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  const exactNameHeading = page.getByRole('heading', {name});
  const someChars = new RegExp(escapeRegExp(name.substr(0,3)))
  const regexpNameHeading = page.getByRole('heading', {name: someChars}).first();
  try {
    // await expect(exactNameHeading.or(regexpNameHeading).getByRole('link')).toBeAttached();
    await exactNameHeading.or(regexpNameHeading).getByRole('link');
    return true;
  } catch(err){name
    return false
  }
}
const waitForInitialPage = async (page, name) => {
  await expect(page.getByRole('heading', {name}).getByRole('link')).toBeAttached();

}
// const sanitizeFname = (fname) => {
//   const invalidChars = /\-[\\/:*?"<>| ]/g;
//   return fname.replace(invalidChars, '_').replace(/_+/g, '_');
// }
const sanitizeFname = (fname) => {
  const toRemoveChars = /['"() ]/g;
  const invalidChars = /[\\/:*?"<>\|\-]/g;
  return fname.replace(toRemoveChars, '').replace(invalidChars, '_').replace(/_+/g, '_');
}
const genUniqId = (prefix, id, fullName) => {
  return `${prefix}_${id}_${fullName}`;
}
const appendStrings = (strArray) => {
  return strArray.join('\n');

}
const dbGetPerson = async (contentUrl) => {
  const result = await getPersonByContentUrl(contentUrl);
  return result.length == 0 ? null : result[0];
}

const findPersonTable = async (newPage, name) => {
  const tableFound = await waitForPersonPage(newPage, name)
  if(!tableFound){
    logger.error('[ERROR]no table found:', name)
  }
  return tableFound;
}

const saveImage = async (newPage, name, fullName, saveFileName) => {
  const result = await getImage(newPage, name);
  const imgUrl = result.imgUrl;
  const imgValid = imgUrl !== 'none';
  if(imgValid){
    await saveImageFromUrl(imgUrl, saveFileName);
    // await addSuccess(pageHeader, fullName, imgUrl, ADD_IF_NOT_DUP, SAVE_TYPE.image);
    logger.info(`${fullName} save image success.`);
    return {savedFname: saveFileName, imgUrl};
  } else {
    logger.error(`${fullName} save image failed.`);
    return false;
  }
}

const getContents = async (newPage) => {
  try {
    const personDataText = await getPersonTable(newPage);
    logger.info('length of person data:', personDataText.length);
    if(personDataText.length > 0){
      return personDataText;
    } else {
      return false;
    }
  } catch(err) {
    return false; 
  }
}

const runWithoutOverwrite = async (crawlTarget, page, contentUrl, link, name, fullName) => {
  const {
    pageHeader,
    idPrefix,
    dbSeqName
  } = crawlTarget;
  const personDocument = await dbGetPerson(contentUrl);
  const isNew = personDocument === null;
  logger.info('isNew:', isNew)
  if(isNew) {
    const nextSequence = await getNextSeqId(dbSeqName);
    const uniqId = genUniqId(idPrefix, nextSequence, fullName)
    const newPage = await openPageWithLink(page, link)
    const tableFound = await findPersonTable(newPage, name);
    if(tableFound){
      const SAVE_PATH = path.join(BASE_DIR, pageHeader);
      const saveFileName = `${path.join(SAVE_PATH, uniqId)}.webp`;
      const personDataFileName = `${path.join(SAVE_PATH, uniqId)}.txt`;
      const contentFromPage = await getContents(newPage);
      if(contentFromPage){
        const contentHash = getStringHash(contentFromPage);
        const {savedFname, imgUrl} = await saveImage(newPage, name, fullName, saveFileName);
        let imageHash;
        try {
          imageHash = await getFileHash(savedFname);
        } catch(err) {
          console.error(err);
          imageHash = 0;
        }
        const metaAppended = appendStrings([
          contentFromPage, 
          'uniqId', uniqId, 
          'imageName', savedFname,
          'imageUrl', imgUrl, 
          'contentUrl', contentUrl,
          'contentHash', contentHash,
          'imageHash', imageHash
        ])
        await savePersonInfo(metaAppended, personDataFileName);
      } 
      newPage.close();
    } else {
      newPage.close();
      logger.info('processed...', ++processed);
      return false;
    }
  } else {
    logger.info(`[${RUN_MODE}] content is already done!`)
    return;
  }
  logger.info('processed...', ++processed)
};
const runAllOverwrite = () => {

};
const runContentOverwrite = async (crawlTarget, page, contentUrl, link, name, fullName) => {
  const personDocument = await dbGetPerson(contentUrl);
  const isNew = personDocument === null;
  if(isNew){
    // create new content
    return
  }
  


};
const runImageOverwrite = () => {};

const runCrawl = {
  'NO_OVERWRITE': runWithoutOverwrite,
  'CONTENT_OVERWRITE': runContentOverwrite,
  'IMAGE': runImageOverwrite,
  'ALL_OVERWRITE': runAllOverwrite
}

const openPageWithLink = async (page, link) => {
  const pagePromise = page.context().waitForEvent('page');
  await link.click({modifiers: ['Control']});
  const newPage = await pagePromise;
  newPage.bringToFront();
  return newPage;
}

let processed = 0;
const main = async (crawlTarget, resultFile) => {
  // const PERSON_LIST_REGEXP = /고수/;
  const {
    pageHeader, 
    pageUrl, 
    pageLinksRegExp,
    idPrefix,
    dbSeqName
  } = crawlTarget;

  // set image and txt save path

  // open headless browser and goto url
  const page = await openHeadlessBrowser()
  await page.goto(pageUrl, {timeout: 60000})
  // get all link list
  const personsLocators = await getLinkInList(page, pageLinksRegExp);

  logger.info('1. number of persons:', personsLocators.length);
  for(const person of personsLocators){
    const {
      clickableLink:link, 
      clickableText:name, 
      fullName
    } = await getLinkNText(person);

    const contentUrl = await link.getAttribute('href');
    await runCrawl[RUN_MODE](crawlTarget, page, contentUrl, link, name, fullName);
  }
  // process.exit();

  //   const isNew = await checkNewContent(contentUrl);
  //   console.log(isNew)
    
  //   const nextSequence = await getNextSeqId(dbSeqName);
  //   const uniqId = genUniqId(idPrefix, nextSequence, fullName)

  //   console.log(uniqId)
  //   const alreadyDoneImage = await checkSuccess(pageHeader, fullName, SAVE_TYPE.image);
  //   const alreadyDoneText = await checkSuccess(pageHeader, fullName, SAVE_TYPE.text);
  //   const allDone = alreadyDoneImage && alreadyDoneText;
  //   if(allDone){
  //     logger.info(`${fullName} save image and text already done!`);
  //     continue;
  //   }

  //   const pagePromise = page.context().waitForEvent('page');
  //   await link.click({modifiers: ['Control']});
  //   const newPage = await pagePromise;
  //   newPage.bringToFront();

  //   const tableFound = await waitForPersonPage(newPage, name)
  //   if(!tableFound){
  //     console.error('[ERROR]no table found:', name)
  //     newPage.close();
  //     logger.info('processed...', ++processed)
  //     continue;
  //   }
  //   const saveFileName = `${path.join(SAVE_PATH, uniqId)}.webp`;
  //   const personDataFileName = `${path.join(SAVE_PATH, uniqId)}.txt`;
  //   let imgUrl

  //   if(!alreadyDoneImage){
  //     const result = await getImage(newPage, name);
  //     imgUrl = result.imgUrl;
  //     const imgValid = imgUrl !== 'none';
  //     result.fullName = fullName;
  //     if(imgValid){
  //       await saveImageFromUrl(imgUrl, saveFileName);
  //       await addSuccess(pageHeader, fullName, imgUrl, ADD_IF_NOT_DUP, SAVE_TYPE.image);
  //       logger.info(`${fullName} save image success.`);
  //     } else {
  //       logger.error(`${fullName} save image failed.`);
  //     }
  //   } else {
  //     logger.info(`${fullName} image already done.`);
  //   }
  //   if(!alreadyDoneText){
  //     const personDataText = await getPersonTable(newPage);
  //     let contentHash, imageHash;
  //     try {
  //       contentHash = getStringHash(personDataText);
  //       imageHash = await getFileHash(saveFileName);
  //     } catch (err) {
  //       console.error(err);
  //       continue;
  //     }
  //     logger.info('length of person data:', personDataText.length);
  //     if(personDataText.length > 0){
  //       const metaAppended = appendStrings([
  //         personDataText, 
  //         'uniqId', uniqId, 
  //         'imageName', `${uniqId}.webp`, 
  //         'imageUrl', imgUrl, 
  //         'contentUrl', contentUrl,
  //         'contentHash', contentHash,
  //         'imageHash', imageHash

  //       ])
  //       await savePersonInfo(metaAppended, personDataFileName);
  //       await addSuccess(pageHeader, fullName, personDataFileName, ADD_IF_NOT_DUP, SAVE_TYPE.text);
  //       logger.info(`${fullName} save text success.`);
  //     } else {
  //       logger.error(`${fullName} save text failed.`);
  //     }
  //   } else {
  //     logger.info(`${fullName} text already done.`);
  //   }

  //   newPage.close();

  //   logger.info('processed...', ++processed)
  // }

  // const personInfo = {};
  // let lastKey = 'none';
  // for(const x of await z){
  //   const currentText = await x.innerText();
  //   if(isTableHeader(currentText)){
  //     console.log('---is tableHeader:', currentText);
  //     personInfo[currentText] = '';
  //     lastKey = currentText;
  //   } else {
  //     if(personInfo[lastKey] !== undefined){
  //       personInfo[lastKey] += currentText;
  //     }
  //   }
  //   // console.log(isTableHeader(await x.innerText()));
  //   // console.log(await x.getAttribute('rowspan'))
  // }  
  // console.log(personInfo)
  // console.log('0000000000000000000000')

  // 4. working exmple (click all human)
  // const persons = await page.getByRole('listitem').filter({hasText: /^김/}).getByRole('link').all();
  // for(let person of await persons){
  //   const name = await person.textContent();
  //   console.log('processing...', name);
  //   await person.click();
  //   console.log('click')
  //   const result = await getImage(page, name);
  //   console.log(result);
  //   await page.goBack();
  // }
}

const RESULT_FILE = 'crawl_wiki.json'
main(CRAWL_URLS[0], RESULT_FILE)