const fs = require('fs');
const processedFile = `processed.db`;
let content = null;

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

const addSuccess = async (pageUrl, fullName, imgPath, preventDup=true) => {
  if(preventDup){
    const isDup = await checkSuccess(pageUrl, fullName);
    if(isDup) return false
  }
  const timestamp = (new Date()).toLocaleString();
  const fullNameReplaced = fullName.replace(')', '').replace('(', '');
  const record = `${pageUrl}@@${fullNameReplaced}@@${timestamp}@@${imgPath}\n`;
  const result = await appendProcessed(record);
  return result;
}
const getDB = async (fname) => {
  return await fs.promises.readFile(processedFile);
}

const checkSuccess = async (pageUrl, fullName) => {
  try {
    if(content === null){
      console.log('get initial data');
      content = await getDB(processedFile);
    }
    // const content = await fs.promises.readFile(processedFile);
    const pageContent = content.toString().split('\n').filter(result => {
      return result.startsWith(pageUrl);
    })
    const fullNameReplaced = fullName.replace(')', '').replace('(', '');
    console.log('checkSuccess:', fullNameReplaced)
    return pageContent.some(result => {
      // const regexp = new RegExp(`@@${fullName}@@`);
      // return regexp.test(result);
      return result.search(`@@${fullNameReplaced}@@`) !== -1;
    })
  } catch(err) {
    return false;
  }
}

module.exports = {
  addSuccess,
  checkSuccess
}