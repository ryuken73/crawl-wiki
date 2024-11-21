const fs = require('fs');
const crawl_config = require('./crawl_config.json');
const processedFile = `processed.db`;
const {create, setLevel} = require('./lib/logger')();
let content = null;

const logger = create({logFile:'crawl_wiki.log'});
const {BASE_DIR} = crawl_config;

const appendProcessed = async (string) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(processedFile, string, (err) => {
      if(err){
        reject(err);
        return
      }
      resolve(true);
    })
  })
}

const addSuccess = async (pageUrl, fullName, imgPath, preventDup=true, type='IMAGE') => {
  if(preventDup){
    const isDup = await checkSuccess(pageUrl, fullName, type);
    if(isDup) return false
  }
  const timestamp = (new Date()).toLocaleString();
  const fullNameReplaced = fullName.replace(')', '').replace('(', '');
  const record = `${pageUrl}@@${type}@@${fullNameReplaced}@@${timestamp}@@${imgPath}\n`;
  const result = await appendProcessed(record);
  return result;
}
const getDB = async (fname) => {
  return await fs.promises.readFile(processedFile);
}

const checkSuccess = async (pageUrl, fullName, type='IMAGE') => {
  try {
    if(content === null){
      logger.info('load initial DB:', processedFile);
      content = await getDB(processedFile);
    }
    // const content = await fs.promises.readFile(processedFile);
    const pageContent = content.toString().split('\n').filter(result => {
      return result.startsWith(pageUrl);
    })
    const fullNameReplaced = fullName.replace(')', '').replace('(', '');
    logger.info('checkSuccess:',pageUrl, type, fullNameReplaced)
    return pageContent.some(result => {
      // const regexp = new RegExp(`@@${fullName}@@`);
      // return regexp.test(result);
      return result.search(`@@${type}@@${fullNameReplaced}@@`) !== -1;
    })
  } catch(err) {
    return false;
  }
}

module.exports = {
  addSuccess,
  checkSuccess
}