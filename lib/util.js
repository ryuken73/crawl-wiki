const fs = require('fs');
const path = require('path');
const {mkdirp} = require('mkdirp');
const {moveFile} = require('./move_file_cj');
const crawl_config = require('../crawl_config.json');
const {getFileHash, getStringHash} = require('./hashLib');
const {
  TEMP_PATH
} = crawl_config;


const appendStrings = (strArray) => {
  return strArray.join('\n');

}

function getFormattedDateTime() {
    const now = new Date();

    // 연도, 월, 일 가져오기
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const date = String(now.getDate()).padStart(2, '0');

    // 시간, 분, 초 가져오기
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 포맷팅
    return `${year}-${month}-${date} ${hours}.${minutes}.${seconds}`;
}
const sanitizeFname = (fname) => {
  const toRemoveChars = /['"() ]/g;
  const invalidChars = /[\\/:*?"<>\|\-]/g;
  return fname.replace(toRemoveChars, '').replace(invalidChars, '_').replace(/_+/g, '_');
}

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

const prepareTempFoler = async () => {
  try {
    const now = getFormattedDateTime();
    const tempFolder = path.join(TEMP_PATH, now);
    const createdFolder = await mkdirp(tempFolder);
    return createdFolder;
  } catch (err) {
    console.error('Error to perpare working folder');
    console.error(err.stack);
    throw new Error('err to prepare working folder')
  }
}

const saveImageToTemp = async (imgBody, listText, tempFoloer) => {
  try {
    const timeStamp = Date.now();
    const sanitizedFname = sanitizeFname(listText);
    const fname = `${timeStamp}_${sanitizedFname}.webp`
    const tempFname = path.join(tempFoloer, fname);
    const result = await utilSaveToFile(imgBody, tempFname)
    if(result === true){
      return {
        saveImageResult: result,
        tmpImageName: tempFname
      }
    } else {
      return {
        saveImageToTemp: false
      }
    }
  } catch (err) {
      throw err;
  }
}

const wikiSaveContentToFile = async (fname, options) => {
  const {action, contents, contentId, listText, linkHref} = options;
  const contentsBlankLineRemoved = utilDelBlankLine(contents);
  const contentDBRecord = {
    'Action': action,
    'contentId': contentId,
    'contentName': listText,
    'contentUrl': linkHref,
    'contentHash': getStringHash(contents),
    'MetaData': contentsBlankLineRemoved,
  }
  const result = await utilSaveToFile(JSON.stringify(contentDBRecord), fname)
  if(result === true) {
    return contentsBlankLineRemoved
  } else {
    return ''
  }
}

const getImageFnameTemp = (imageId, tempFolder) => {
  return path.join(tempFolder, `${imageId}.json`)
}

const wikiSaveImageMetaToFile = async (tmpImageName, options) => {
  const {action, imageId, contentId, subDir, imgUrl, tempFolder} = options;
  const imageHash = await getFileHash(tmpImageName);
  const imageDBRecord = {
    'Action': action,
    'imageId': imageId,
    'contentId': contentId,
    'imageSubDir': subDir,
    'imageName': path.basename(tmpImageName),
    'imageUrl': imgUrl,
    'imageHash': imageHash
  }
  const imageJsonFile = getImageFnameTemp(imageId, tempFolder);
  return await utilSaveToFile(JSON.stringify(imageDBRecord), imageJsonFile)
}

module.exports = {
  appendStrings,
  sanitizeFname,
  utilSaveToFile,
  utilMoveFile,
  utilDelBlankLine,
  prepareTempFoler,
  saveImageToTemp,
  wikiSaveContentToFile,
  wikiSaveImageMetaToFile
}