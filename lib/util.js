const fs = require('fs');
const path = require('path');
const {moveFile} = require('./move_file_cj');

const utilSaveToFile = async (data, fname) => {
  try {
    await fs.promises.writeFile(fname, data);
    return true
  } catch (err) {
    console.error(`Error saving to file (${fname}):`, err.message);
    console.error(err.stack);
    throw new Error(`save file to ${fname} failed`)
  }
}
const utilMoveFile = async (srcFile, targetFile) => {
  try {
    return moveFile(srcFile, targetFile);
  } catch (err) {
    throw err;
  }
}
const utilDelBlankLine = (str) => {
  return str.toString().split('\n').filter(line => line.trim() !== '').join('\n');
}

module.exports = {
  utilSaveToFile,
  utilMoveFile,
  utilDelBlankLine
}