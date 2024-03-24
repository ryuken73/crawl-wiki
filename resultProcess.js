const fs = require('fs');
const resultFile = `resultFile.db`;
const appendResult = async (string) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(resultFile, string, (err) => {
      if(err){
        reject(err);
        return
      }
      resolve(true);
    })
  })
}
const addSuccess = async (pageUrl, fullName) => {
  const record = `${pageUrl}^${fullName}\n`;
  const result = await appendResult(record);
  return result;
}

module.exports = {
  addSuccess
}