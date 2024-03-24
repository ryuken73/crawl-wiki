const { chromium } = require('playwright');
const { expect } = require('@playwright/test');
const {create, setLevel} = require('./lib/logger')();
const logger = create({logFile:'crawl_wiki.log'});

const HEADERS = /^(출생|국적|본관|신체|학력|가족|병력|데뷔|소속사|링크)$/
const PERSON_TABLE_HEADERS = /(출생|학력)/

const CRAWL_URLS = [
  {
    pageHeader: '배우/한국',
    pageUrl: 'https://namu.wiki/w/%EB%B0%B0%EC%9A%B0/%ED%95%9C%EA%B5%AD',
    pageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    // pageLinksRegExp: /김다현/
  }
]

const isTableHeader = text => {
  return HEADERS.test(text);
}

const openHeadlessBrowser = async (options) => {
  const browser = await chromium.launchPersistentContext('', {
    headless: false
  })
  const page = await browser.newPage()
  return page
}

const getLinkInList = async (locator, regexp) => {
  // return locator.getByRole('listitem').getByRole('link', {name: regexp}).all();
  return locator.getByRole('listitem').filter({hasText: regexp}).all();
}

const getImage = async (page, name) => {
  // const table = await page.getByRole('table').first();
  logger.info('get image path...')
  let table;
  try {
    table = await page.getByRole('table').filter({hasText: /출생/});
    const imgLocator = await table.getByRole('img', {timeout: 5000}).nth(1);
    const imgPath =  await imgLocator.evaluate(ele => ele.src,'',{timeout: 1000});
    return { name, imgPath };
  } catch(err) {
    console.error(err);
    return { name, imgPath: 'none'};
  }
};

const sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, time)
  }) 
}
const getLinkNText = async locator => {
  const fullName = await locator.textContent();
  const link = await locator.getByRole('link');
  const count = await locator.getByRole('link').count();
  logger.info('get link and name:', fullName, count);
  const clickableLink = count > 1 ? link.first(): link;
  const clickableText = count > 1 ? await link.first().textContent(): fullName;
  return {clickableLink, clickableText, fullName}
}
const waitForPersonPage = async (page, name) => {
  const exactNameHeading = page.getByRole('heading', {name});
  const someChars = new RegExp(name.substr(1,3))
  const regexpNameHeading = page.getByRole('heading', {name: someChars}).first();
  try {
    await expect(exactNameHeading.or(regexpNameHeading).getByRole('link')).toBeAttached();
    return true;
  } catch(err){
    return false
  }
}
const waitForInitialPage = async (page, name) => {
  await expect(page.getByRole('heading', {name}).getByRole('link')).toBeAttached();

}
const main = async (crawlTarget, resultFile) => {
  // const PERSON_LIST_REGEXP = /고수/;
  const {pageHeader, pageUrl, pageLinksRegExp} = crawlTarget;

  const page = await openHeadlessBrowser()
  await page.goto(pageUrl)
  const personsLocators = await getLinkInList(page, pageLinksRegExp);

  logger.info('1. number of persons:', personsLocators.length);
  let processed = 0;
  for(const person of personsLocators){
    const {
      clickableLink:link, 
      clickableText:name, 
      fullName
    } = await getLinkNText(person);
    await link.click();
    const tableFound = await waitForPersonPage(page, name)
    if(!tableFound){
      console.error('[ERROR]no table found:', name)
      continue;
    }
    const result = await getImage(page, name);
    result.fullName = fullName;
    logger.info(result);
    await page.goBack();
    await waitForInitialPage(page, pageHeader)

    logger.info('processed...', ++processed)
  }

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