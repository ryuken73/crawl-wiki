const { chromium } = require('playwright');
const { expect } = require('@playwright/test');

const openHeadlessBrowser = async (options) => {
  const browser = await chromium.launchPersistentContext('', {
    headless: false,
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
  // return locator.getByRole('listitem').getByRole('link', {name: regexp}).all();
  return locator.getByRole('listitem').filter({hasText: regexp}).all();
}
const getLinkNText = async locator => {
  const fullName = await locator.textContent();
  const link = await locator.getByRole('link');
  const count = await locator.getByRole('link').count();
  console.log('get link and name:', fullName, count);
  const clickableLink = count > 1 ? link.first(): link;
  const clickableText = count > 1 ? await link.first().textContent(): fullName;
  return {clickableLink, clickableText, fullName}
}
const waitForPersonPage = async (page, name) => {
  const exactNameHeading = page.getByRole('heading', {name});
  const someChars = new RegExp(name.substr(0,3))
  const regexpNameHeading = page.getByRole('heading', {name: someChars}).first();
  console.log(someChars)
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

const main = async (crawlTarget, resultFile) => {
  // const PERSON_LIST_REGEXP = /고수/;
  const {pageHeader, pageUrl, pageLinksRegExp} = crawlTarget;

  const page = await openHeadlessBrowser()
  await page.goto(pageUrl)
  const personsLocators = await getLinkInList(page, pageLinksRegExp);
  console.log('1. number of persons:', personsLocators.length);
  let processed = 0;
  for(const person of personsLocators){
    const {
      clickableLink:link, 
      clickableText:name, 
      fullName
    } = await getLinkNText(person);
    console.log(link);
    if(fullName === '김형준 - (SS501)'){
      // await link.click();
      const pagePromise = page.context().waitForEvent('page');
      await link.click({modifiers: ['Control']});
      const newPage = await pagePromise
      newPage.bringToFront();

      const tableFound = await waitForPersonPage(newPage, name)
      console.log(tableFound)

      if(!tableFound){
        console.error('[ERROR]no table found:', name)
        // await page.goBack();
        // await waitForInitialPage(page, pageHeader)
        logger.info('processed...', ++processed)
        continue;
      }
      newPage.close();
    }
  }
};

const CRAWL_URLS = [
  {
    pageHeader: '배우/한국',
    pageUrl: 'https://namu.wiki/w/%EB%B0%B0%EC%9A%B0/%ED%95%9C%EA%B5%AD',
    // pageLinksRegExp: /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/,
    // pageLinksRegExp: /김현중/
    pageLinksRegExp: /김형/
  }
]

const RESULT_FILE = 'crawl_wiki.json'
main(CRAWL_URLS[0], RESULT_FILE)
