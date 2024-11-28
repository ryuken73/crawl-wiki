const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');
const {create, setLevel} = require('./logger')();
const logger = create({logFile:'crawl_wiki.log'});

class Browser {
  constructor(url, options = {}){
    const {savePath='c:/temp'} = options;
    this.options = options;
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
  saveToFile = async (data, fname) => {
    return new Promise((resolve, reject) => {
      const fullName = path.join(this.savePath, fname);
      fs.writeFile(fullName, data, (err) => {
        if(err) throw err;
        logger.info('save image success:', fullName)
        resolve(true)
      })
    })
  }
  wikiGetButtonProps = async (button) => {
    const buttonText = await this.getLocatorText(button);
    const buttonHref = await this.getLocatorAttribute(button, 'href');
    return {buttonText, buttonHref}
  }
  wikiGetNextButton = async () => {
    const buttons = await (await this.getButtonsInLocator()).filter({hasText: '다음'}).all();
    let nextButton = null;
    while(buttons.length > 0){
      const button = buttons.shift();
      const hrefText = decodeURI(await this.getLocatorAttribute(button, 'href'));
      console.log(hrefText)
      if(/namespace=문서.*cfrom=/.test(hrefText)){
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
    const escapeRegExp = (input) => {
      return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    const exactNameHeading = page.getByRole('heading', {name});
    const someChars = new RegExp(escapeRegExp(name.substr(0,3)))
    const regexpNameHeading = page.getByRole('heading', {name: someChars}).first();
    try {
      await exactNameHeading.or(regexpNameHeading).getByRole('link');
      return true;
    } catch(err){
      throw err;
    }
  }
  wikiGetPersonTable = async (childPage) => {
    const keyword1 = await childPage.getByRole('table').filter({hasText: /출생/});
    const keyword2 = await childPage.getByRole('table').filter({hasText: /직업/});
    const keyword3 = await childPage.getByRole('table').filter({hasText: /본명/});
    try {
      const table = await keyword1.or(keyword2).or(keyword3)
      console.log('table.count=', await table.count());
      const tableCount = await table.count();
      const personTable = tableCount > 1 ? await table.nth(tableCount - 1): table;
      return personTable
    } catch (err) {
      throw err;
    }
  }
  wikiGetPersonTableText = async (childPage) => {
    try {
      const personTable = await this.wikiGetPersonTable(childPage);
      const fullText = await personTable.innerText({timeout: this.timeout.SHORT});
      logger.info('length of person data:', fullText.length);
      return fullText;
    } catch (err) {
      logger.error('error in wikiGetPersionTableText');  
      logger.error(err.message);
      throw err;
    }
  }
  wikiGetContents = async (childPage) => {
    try {
      const personDataText = await this.wikiGetPersonTableText(childPage);
      logger.info('length of person data:', personDataText.length);
      if(personDataText.length > 0){
        return personDataText;
      } else {
        return null;
      }
    } catch(err) {
      throw err;
    }
  }
  wikiGetImageUrl = async (childPage, name) => {
    try {
      const personTable = await this.wikiGetPersonTable(childPage);
      const images = await personTable.getByRole('img', {timeout: 1000});
      await expect.poll(async () => images.count()).toBeGreaterThan(0);
      const imgCount = await personTable.getByRole('img', {timeout: 1000}).count();
      logger.info('image count = ',imgCount);
      const imgLocator = await personTable.getByRole('img', {timeout: 1000}).nth(1);
      const imgUrl =  await imgLocator.evaluate(ele => ele.src,'',{timeout: 1000});
      return imgUrl;
    } catch (err) {
      logger.error('error in wikiGetPersionTableText');  
      logger.error(err.message);
      throw err;
    }
  }
}

const createBrowser = async (url, options) => {
  const browser = new Browser(url, options);
  await browser.initialize();
  await browser.gotoUrl(url);
  return browser;
}

module.exports = createBrowser;