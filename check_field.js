const fs = require('fs');
const path = require('path');
const basePath = 'd:/002.Code/002.node/crawl-wiki/images/가수/한국';

const checkField = '이름';
fs.readdir(basePath, (err, files) => {
  files.filter(file => /txt$/.test(file)).map(file => {
    const fullName = path.join(basePath, file);
    const contents = fs.readFileSync(fullName);
    const regExp = new RegExp(checkField);
    const hasField = regExp.test(contents.toString());
    if(!hasField){
      console.log(`${file} does not has field`, checkField);
      // console.log(contents.toString())
    }
  })
})