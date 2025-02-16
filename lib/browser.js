const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');
const {create, setLevel} = require('./logger')();
const { WIKI_BASE_URL } = require('../crawl_config.json');

const logger = create({logFile:'crawl_wiki.log'});

const isValidHttpUrl = (string) => {
    try {
        const url = new URL(string);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch (err) {
        return false;
    }
}

class Browser {
  constructor(url, options = {}){
    const {savePath='c:/temp', logger: loggerFromCaller} = options;
    this.options = options;
    this.logger = loggerFromCaller || logger;
    this.url = url;
    this.savePath = savePath;
    this.browser = null;
    this.page = null;
    this.childPages = [];
    this.timeout = {
      LONG: 60000,
      SHORT: 5000,
    }
  }
  initialize = async () => {
    const {IS_HEADLESS=false} = this.options;
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
    this.browser = browser;
    this.page = await browser.newPage();
    return this;
  }

  gotoUrl = async (url=this.url) => {
    await this.page.goto(url, {
      timeout: this.timeout.LONG
    })
  }
  getListWithLinkInArray = async (options={}) => {
    const {locator = this.page, regexp=/.*/, id=null} = options;
    const realLocator = id === null ? locator : locator.locator(`#${id}`);
    return realLocator.getByRole('listitem').filter({has: await locator.getByRole('link')}).filter({hasText: regexp}).all();
  }
  getLocatorWithText = async (options={}) => {
    const {locator = this.page, text=/.*/} = options;
    return await locator.getByRole('link').filter({hasText: text});
  }
  getLinksInLocator = async (locator=this.page) => {
    return await locator.getByRole('link');
  }
  getButtonsInLocator = async (locator=this.page) => {
    return await locator.getByRole('button');
  }
  getButtonsInLocatorArray = async (locator=this.page) => {
    return await locator.getByRole('button').all();
  }
  getLocatorText = async (locator=this.page) => {
    return await locator.textContent();
  }
  getLocatorAttribute = async (locator=this.page, attrName) => {
    return await locator.getAttribute(attrName);
  }
  openChildPageByUrl = async (targetUrl) => {
    const newPage = await this.browser.newPage();
    const fullUrl = path.join(WIKI_BASE_URL, targetUrl)
    await newPage.goto(fullUrl, {
      timeout: this.timeout.LONG
    })
    this.childPages = [...this.childPages, newPage];
    return newPage
  }
  openChildPageByClickLink = async (link) => {
    const pagePromise = this.page.context().waitForEvent('page');
    await link.click({modifiers: ['Control']});
    const newPage = await pagePromise;
    newPage.bringToFront();
    this.childPages = [...this.childPages, newPage];
    return newPage;
  }
  clickLinkAndWait = async (link) => {
    return await Promise.all([
      this.page.waitForNavigation(), 
      link.click(), 
    ]);
  }
  closeChildPage = async (childPage=this.childPages[0]) => {
    this.childPages = [];
    childPage.close();
  };
  wikiGetButtonProps = async (button) => {
    const buttonText = await this.getLocatorText(button);
    const buttonHref = await this.getLocatorAttribute(button, 'href');
    return {buttonText, buttonHref}
  }
  wikiGetNextButton = async (hrefRegExp=/namespace=문서.*cfrom=/) => {
    const buttons = await (await this.getButtonsInLocator()).filter({hasText: '다음'}).all();
    let nextButton = null;
    while(buttons.length > 0){
      const button = buttons.shift();
      const hrefText = decodeURI(await this.getLocatorAttribute(button, 'href'));
      console.log(hrefText)
      if(hrefRegExp.test(hrefText)){
        nextButton = button;
        break
      }
    }
    return nextButton;
  }
  wikiGetListProps = async (listItem) => {
    const firstLink = (await this.getLinksInLocator(listItem)).first();
    const listText = await this.getLocatorText(listItem);
    const linkText = await this.getLocatorText(firstLink);
    const linkHref = await this.getLocatorAttribute(firstLink, 'href');
    return {firstLink, listText, linkText, linkHref}
  }
  wikiIsPageForClasses = (url) => {
    return /w\/분류:/.test(url)
  }
  wikiWaitForPersonPage = async (page, name) => {
    this.nameShouldBeInTable = name;
    const escapeRegExp = (input) => {
      return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    const exactNameHeading = page.getByRole('heading', {name});
    const someChars = new RegExp(escapeRegExp(name.substr(0,3)))
    const regexpNameHeading = page.getByRole('heading', {name: someChars}).first();
    try {
      await exactNameHeading.or(regexpNameHeading).getByRole('link');
      await expect(page.getByAltText('크리에이티브 커먼즈 라이선스')).toBeVisible();
      return true;
    } catch(err){
      throw err;
    }
  }
  // wikiGetTableWithImageWebp = async (table) => {
  //   // const tableWithImage = await table.locator('img[src$=".webp"]');
  //   const tableWithImage = await table.filter({has: await table.locator('img[src$=".webp"]')}).all();
  //   console.log(await tableWithImage[0].textContent());
  // }
  showAllText = async (locators) => {
    const count = await locators.count();
    console.log('count=', count)
    for (let i = 0; i < count; i++) {
      const elementText = await locators.nth(i).textContent();
      console.log(`Element ${i + 1}: ${elementText}`);
    }
  }
  isPersonTable = async (cellLocators) => {
    let result = false;
    const regExp = new RegExp(/^출생$|^직업$|^경력$|^본명$|^생년월일$/);
    const count = await cellLocators.count();
    for (let i = 0; i < count; i++) {
      const elementText = await cellLocators.nth(i).textContent();
      console.log(`Element ${i + 1}: ${elementText}`);
      if(regExp.test(elementText)){
        result = true;
        break
      }
    }
    return result;
  }
  pickTable = async (tableLocators) => {
    let personTable = false;
    const count = await tableLocators.count();
    console.log('count of tables = ', count);
    for (let i = 0; i < count; i++) {
      const tableLocator = await tableLocators.nth(i);
      const cellLocators = await tableLocator.getByRole('cell');
      if(await this.isPersonTable(cellLocators)){
        personTable = tableLocator;
        break;
      }
    }
    return personTable;
  }
  wikiFilterTableByName = async (locators) => {
    const count = await locators.count();
    let tableWithName;
    for (let i = 0; i < count; i++) {
      const thisElement = await locators.nth(i)
      const elementText = await thisElement.textContent();
      // console.log(`Element ${i + 1}: ${elementText}`);
      const regexp = new RegExp(`^${this.nameShouldBeInTable}.*출생`)
      if(regexp.test(elementText)){
        tableWithName = thisElement;
        break
      }
      tableWithName = thisElement;
    }
    return tableWithName;
  }
  wikiGetPersonTable = async (childPage) => {
    let table, tableCount;
    const tables = await childPage.locator('table');
    try {
      table = await this.pickTable(tables)
      if(table === false){
        throw new Error('no person table found');
      }
      return table;
    } catch (err) {
      throw err;
    }
  }
  wikiGetPersonTableText = async (childPage) => {
    try {
      const personTable = await this.wikiGetPersonTable(childPage);
      const fullText = await personTable.innerText({timeout: this.timeout.SHORT});
      return fullText;
    } catch (err) {
      // this.logger.error('error in wikiGetPersonTableText');  
      // throw err;
      console.error(err)
      throw new Error('error in wikiGetPersonTableText');  
    }
  }
  wikiGetContents = async (childPage) => {
    try {
      const personDataText = await this.wikiGetPersonTableText(childPage);
      this.logger.info('length of person data:', personDataText.length);
      if(personDataText.length > 0){
        return personDataText;
      } else {
        return null;
      }
    } catch(err) {
      throw err;
    }
  }
  wikiGetImageUrl = async (childPage) => {
    try {
      const personTable = await this.wikiGetPersonTable(childPage);
      console.log(await personTable.textContent())
      const images = await personTable.getByRole('img', {timeout: 1000});
      await expect.poll(async () => images.count()).toBeGreaterThan(0);
      const imgCount = await personTable.getByRole('img', {timeout: 1000}).count();
      this.logger.info('found image count = ',imgCount, images);
      const imgLocator = await personTable.getByRole('img', {timeout: 1000}).nth(1);
      const imgUrl =  await imgLocator.evaluate(ele => ele.src,'',{timeout: 1000});
      if(isValidHttpUrl){
        return imgUrl;
      }
      throw new Error('image url is not valid!');
    } catch (err) {
      console.error(err)
      throw new Error(`cannot find image url`);
    }
  }
  wikiGetImageData = async (childPage) => {
    try {
      const url = await this.wikiGetImageUrl(childPage);
      const response = await axios.get(url, {responseType: 'arraybuffer'});
      return {
        imgUrl: url,
        imgBody: response.data
      }
    } catch (err) {
      throw err;
    }
  }
  wikiGetBacklinkDiv = async (contentUrl) => {
    // last returns most inner div element which has article
    const filteredDiv = await this.page.locator('div').filter({
      has: this.page.getByRole('article')
    }).last()
    return filteredDiv;
  }
  wikiMakeUrlByText = (text) => {
    return `/w/${encodeURI(text)}`;
  }
}

const createBrowser = async (url, options) => {
  const browser = new Browser(url, options);
  await browser.initialize();
  url && await browser.gotoUrl(url);
  return browser;
}

module.exports = createBrowser;