const { chromium } = require('playwright');

const openHeadless = async (options) => {
  const browser = await chromium.launchPersistentContext('', {
    headless: false
  })
  const page = await browser.newPage()
  return page
}

const getLinInList = async (locator, regexp) => {
  return locator.getByRole('listitem').getByRole('link', {name: regexp}).all();
}


const main = async () => {
  const KOR_ACTOR_URL = 'https://namu.wiki/w/%EB%B0%B0%EC%9A%B0/%ED%95%9C%EA%B5%AD';
  const PERSON_LIST_REGEXP = /(^[가-힣]{2,4}$)|([가-힣]{2,4} - .*$)/;

  const page = await openHeadless()
  await page.goto(KOR_ACTOR_URL)
  const personsLocators = await getLinInList(page, PERSON_LIST_REGEXP);
  console.log('1. number of persons:', personsLocators.length);
  for(const person of personsLocators){
    console.log('name:', await person.allInnerTexts())
  }
}

main()