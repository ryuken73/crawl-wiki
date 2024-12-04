const fs = require('fs');
const path = require('path');
const basePath = 'd:/002.Code/002.node/crawl-wiki/images/한국';

const sanitizeFname = (fname) => {
  const toRemoveChars = /['"() ]/g;
  const invalidChars = /[\\/:*?"<>\|\-]/g;
  return fname.replace(toRemoveChars, '').replace(invalidChars, '_').replace(/_+/g, '_');
}

fs.readdir(basePath, (err, files) => {
  files.filter(file => /txt$/.test(file)).map(file => {
    console.log(sanitizeFname(file))
  })
})