const path = require('path');
const WIKI_BASE_URL = 'https://namu.wiki';

const processPage = async (browser, filterHref) => {
  let results = [];
  const div = await browser.wikiGetBacklinkDiv(filterHref);
  // console.log(await div.innerText());
  // const listLinks = await browser.getListWithLinkInArray({}) // not works.
  // const listLinks = await div.getByRole('listitem').filter({has: await div.getByRole('link')}).all() // not works
  // const listLinks = await div.getByRole('listitem').all(); // works!
  // const listLinks = await div.getByRole('link').all(); // works!
  const listLinks = await div.getByRole('listitem').filter({has: await browser.page.getByRole('link')}).all(); // works!
  for(let link of listLinks){
    console.log('##############################################')
    // console.log(await link.innerText());
    const {listText, linkText, linkHref} = await browser.wikiGetListProps(link);
    console.log(listText, linkText, linkHref)
    results = [...results, {listText, linkText, linkHref}]
  }
  return results;
}
const mkBacklinkUrl = (relativeUrl) => {
  return path.join(WIKI_BASE_URL, relativeUrl.replace('\/w\/', '\/backlink\/'))
}

module.exports = async (browser, url) => {
  let results = [];
  const backLinkUrl = mkBacklinkUrl(url);
  console.log('goto url:', backLinkUrl);
  await browser.gotoUrl(path.join(backLinkUrl))
  const filterHref = url;

  const subResults = await processPage(browser, filterHref);
  results = [...results, ...subResults]

  while(true){
    const backLinkBtnRegExp = /backlink\/.*from=/;
    const nextButton = await browser.wikiGetNextButton(backLinkBtnRegExp);
    console.log(nextButton)
    if(nextButton === null){
      console.log('all process done')
      break;
    }
    await browser.clickLinkAndWait(nextButton);
    const subResults = await processPage(browser, filterHref);
    results = [...results, ...subResults]
  }
  return results;
}

// const targetUrls = [
//   '/w/%EC%84%9C%ED%98%84%EC%A7%84', // 서현진 backlink url
//   '/w/%EC%98%A4%EB%8B%AC%EC%88%98', // 오달수 backlink url
// ]
// const targetUrl = 'https://namu.wiki/backlink/%EC%84%9C%ED%98%84%EC%A7%84' // 서현진 backlink url
// main(targetUrls);