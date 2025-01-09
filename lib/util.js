const fs = require('fs');
const path = require('path');
const {mkdirp} = require('mkdirp');
// const isWebp = require('is-webp');
// const {readChunk} = require('read-chunk');
const {moveFile} = require('./move_file_cj');
const crawl_config = require('../crawl_config.json');
const {getFileHash, getStringHash} = require('./hashLib');
const {
  TEMP_PATH
} = crawl_config;

const isWebp = (buffer) => {
	if (!buffer || buffer.length < 12) {
		return false;
	}

	return buffer[8] === 87
		&& buffer[9] === 69
		&& buffer[10] === 66
		&& buffer[11] === 80;  
}
const isJPG = (buffer) => {
	if (!buffer || buffer.length < 3) {
		return false;
	}
	return buffer[0] === 255
		&& buffer[1] === 216
		&& buffer[2] === 255;
}

const getImageType = (buffer) => {
  if(isWebp(buffer)){
    return 'webp'
  }
  if(isJPG(buffer)){
    return 'jpg'
  }
  return false;

}

const sleepMS = (secondsMS) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, secondsMS);
  })
}

const readChunk = async (filePath, {length, startPosition}) => {
	const fileDescriptor = await fs.promises.open(filePath, 'r');

	try {
		let {bytesRead, buffer} = await fileDescriptor.read({
			buffer: new Uint8Array(length),
			length,
			position: startPosition,
		});

		if (bytesRead < length) {
			buffer = buffer.subarray(0, bytesRead);
		}

		return buffer;
	} finally {
		await fileDescriptor?.close();
	}
}

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
const utilReadJsonFile = async (fname) => {
  try {
    const data = await fs.promises.readFile(fname);
    return data ? JSON.parse(data): {};

  } catch (err) {
    console.error(`Error to read file (${fname}):`, err.message);
    console.error(err.stack);
    throw new Error(`read file ${fname} failed`)
  }
}
const utilGetJsonWebpFileList = async (srcFolder) => {
  try {
    const txtFiles = await fs.promises.readdir(srcFolder);
    const srcFiles = txtFiles.filter(fname => /\.json$/.test(fname)).map(fname => path.join(srcFolder, fname));
    const webpFiles = txtFiles.filter(fname => /\.webp$/.test(fname)).map(fname => path.join(srcFolder, fname));
    return [...srcFiles, ...webpFiles];
  } catch (err) {
    console.error(`Error to get json file list (${path}):`, err.message);
    console.error(err.stack);
    throw new Error(`get json file list from ${path} failed`)

  }
}
const wikiSeparateFileType = (flist) => {
  const contentRegExp = /_C_[0-9]{6}/;
  const imageRegExp = /_I_[0-9]{6}/;
  const webpRegExp = /^[0-9]{13}_.*.webp/;
  const contentList = flist.filter(fname => contentRegExp.test(path.basename(fname)));
  const imageList = flist.filter(fname => imageRegExp.test(path.basename(fname)));
  const webpList = flist.filter(fname => webpRegExp.test(path.basename(fname)));
  return [contentList, imageList, webpList]
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
    console.error(err.stack)
    throw new Error(`error to move file from ${srcFile} to ${targetFile}`);
  }
}
const utilDelBlankLine = (str) => {
  return str.toString().split('\n').filter(line => line.trim() !== '').join('\n');
}
const utilIsWebpFile = async (fname) => {
  const buffer = await readChunk(fname, {length: 12});
  return isWebp(buffer);
}
const utilGetImageType = async (fname) => {
  const buffer = await readChunk(fname, {length: 12});
  const type = getImageType(buffer);
  return type;
}
const getDefaultTempFolder = () => {
  return path.join(TEMP_PATH, 'temp');
}
const prepareTempFoler = async () => {
  try {
    const now = getFormattedDateTime();
    const tempFolder = path.join(TEMP_PATH, now);
    const createdFolder = await mkdirp(tempFolder);
    const doneFolder = path.join(createdFolder, 'done');
    const invalidFolder = path.join(createdFolder, 'invalid_webp');
    await mkdirp(doneFolder)
    await mkdirp(invalidFolder)
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
  const {action, contents, contentId, listText, linkHref, personIdPrefix} = options;
  const contentsBlankLineRemoved = utilDelBlankLine(contents);
  const contentDBRecord = {
    'action': action,
    'contentId': contentId,
    'contentName': listText,
    'contentUrl': linkHref,
    'contentHash': getStringHash(contents),
    'primaryCategory': personIdPrefix,
    'metadata': contentsBlankLineRemoved,
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
    'action': action,
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
const wikiGetNameFromFname = (fullName) => {
  const fname = path.basename(fullName);
  const regexp = /_[CI]_[0-9]{6}_(.+)\.json$/;
  const match = fname.match(regexp)
  if(match) {
    return match[1];
  }
}
const wikiGetImageFileWithName = (files, name) => {
  const regexp = new RegExp(`_I_[0-9]{6}_${name}.json`)
  console.log(regexp)
  return files.filter(file => {
    return regexp.test(path.basename(file));
  })
}
const wikiGetWebpImageFileWithName = (files, name) => {
  const regexp = new RegExp(`[0-9]{13}_${name}.webp`)
  return files.filter(file => {
    return regexp.test(path.basename(file));
  })
}
const retry = async (fn, retries = 3, delay = 1000) => {
  let lastError;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn(); 
    } catch (error) {
      lastError = error;
      console.warn(`Retry ${i + 1} failed. Retrying in ${delay}ms...`);
      await new Promise(res => setTimeout(res, delay)); 
    }
  }
  throw lastError; 
}

module.exports = {
  appendStrings,
  sanitizeFname,
  sleepMS,
  retry,
  utilReadJsonFile,
  utilGetJsonWebpFileList,
  utilSaveToFile,
  utilMoveFile,
  utilDelBlankLine,
  utilIsWebpFile,
  utilGetImageType,
  getDefaultTempFolder,
  prepareTempFoler,
  saveImageToTemp,
  wikiSeparateFileType,
  wikiSaveContentToFile,
  wikiSaveImageMetaToFile,
  wikiGetNameFromFname,
  wikiGetImageFileWithName,
  wikiGetWebpImageFileWithName
}