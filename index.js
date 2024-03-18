const { chromium } = require('playwright');
const { expect } = require('@playwright/test');

const HEADERS = /^(출생|국적|본관|신체|학력|가족|병력|데뷔|소속사|링크)$/
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

const getLinInList = async (locator, regexp) => {
  // return locator.getByRole('listitem').getByRole('link', {name: regexp}).all();
  return locator.getByRole('listitem').filter({hasText: regexp}).all();
}

const getImage = async (page, name) => {
  const detailPageHeader = await page.getByRole('heading', {name}).getByRole('link');
  const table = await page.getByRole('table').first();
  const imgLocator = await table.getByRole('img').nth(1);
  const person = await detailPageHeader.innerText()
  const imgPath =  await imgLocator.evaluate(ele => ele.src);
  return { name, imgPath };
};

const sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, time)
  }) 
}
const main = async () => {
  const KOR_ACTOR_URL = 'https://namu.wiki/w/%EB%B0%B0%EC%9A%B0/%ED%95%9C%EA%B5%AD';
  const PERSON_LIST_REGEXP = /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/;

  const page = await openHeadlessBrowser()
  await page.goto(KOR_ACTOR_URL)
  const personsLocators = await getLinInList(page, PERSON_LIST_REGEXP);
  console.log('1. number of persons:', personsLocators.length);
  for(const person of personsLocators){
    const fullName = await person.textContent();
    const link = await person.getByRole('link');
    const count = await person.getByRole('link').count();
    console.log('name:', fullName, count);
    const firstLink = count > 1 ? link.first(): link;
    const firstName = count > 1 ? await link.first().textContent():fullName;
    await firstLink.click();
    const result = await getImage(page, firstName);
    console.log(result);
    await page.goBack({waitUntil: 'domcontentloaded'});
    const x = await expect(page.getByRole('heading', {name: '배우/한국'}).getByRole('link')).toBeAttached();
    console.log('person attached:',person, x);
    // await sleep(2000)
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

main()