const fs = require('fs');
const path = require('path');
const {create, setLevel} = require('./lib/logger')();
const {
  utilReadJsonFile,
  utilGetJsonWebpFileList,
  utilGetImageType,
  utilMoveFile,
  wikiSeparateFileType,
  wikiGetNameFromFname,
  wikiGetImageFileWithName,
  wikiGetWebpImageFileWithName
} = require('./lib/util')
const {
  dbInsertContent,
  dbInsertImage
} = require('./lib/queries');

require('dotenv').config()
const SRC_FOLDER = process.env.SRC_FOLDER;

const BASE_FOLDER = 'D:/002.Code/002.node/crawl-wiki/work';
const WORKING_FOLDER_NAME = SRC_FOLDER || '2024-12-04 13.15.33';
const BASE_IMAGE_FOLDER = 'D:/002.Code/002.node/crawl-wiki/images';

async function main(){
  let contentsFiles, imageFiles, webpFiles;
  const workingFoler = path.join(BASE_FOLDER, WORKING_FOLDER_NAME);
  logger = create({logFile:path.join(workingFoler, 'addDatabase.log')});
  try {
    const flist = await utilGetJsonWebpFileList(workingFoler);
    const files = wikiSeparateFileType(flist);
    contentsFiles = files[0];
    imageFiles = files[1];
    webpFiles = files[2];
    logger.info(`file counts: contents[${contentsFiles.length}], imageMeta[${imageFiles.length}], webp[${webpFiles.length}]`)
  } catch (err) {
    console.log(err.stack)
    logger.error(err)
    process.exit()
  }

  const moveFinal = async (fname, subDir) => {
    const finalSavePath = path.join(BASE_IMAGE_FOLDER, subDir);
    const finalSaveFname = path.join(finalSavePath, path.basename(fname));
    await utilMoveFile(fname, finalSaveFname);
  }
  const moveDone = async (fname) => {
    const doneSavePath = path.join(workingFoler, 'done');
    const doneSaveFname = path.join(doneSavePath, path.basename(fname))
    await utilMoveFile(fname, doneSaveFname);
  }
  const moveInvalidWebp = async (fname) => {
    const savePath = path.join(workingFoler, 'invalid_webp');
    const saveFname = path.join(savePath, path.basename(fname))
    await utilMoveFile(fname, saveFname);
  }

  for(let contentFile of contentsFiles){
    const name = wikiGetNameFromFname(contentFile);
    const webpFileWithName = wikiGetWebpImageFileWithName(webpFiles, name)
    console.log(webpFileWithName)
    if(webpFileWithName.length > 1 || webpFileWithName.length === 0){
      throw new Error(`webp file for ${name} should be one but ${webpFileWithName.length}`)
    } 
    const imageFilesWithName = wikiGetImageFileWithName(imageFiles, name);
    console.log(imageFilesWithName);
    if(imageFilesWithName.length > 1){
      throw new Error(`image meta file for ${name} should be one but ${imageFilesWithName.length}`)
    }
    const imageFile = imageFilesWithName[0];
    logger.info('processing..', name);
    const contentJson = await utilReadJsonFile(contentFile)
    const imageJson = await utilReadJsonFile(imageFile)
    const webpFile = webpFileWithName[0];
    try {
      const type = await utilGetImageType(webpFile);
      if(type === false){
        // throw new Error(`${webpFile} is not valid webp file type`);
        logger.error(`${webpFile} is not webp/jpg file type`);
        throw new Error('INVALID_WEBP');
      }
      const resultContent = await dbInsertContent(contentJson);
      if(resultContent === undefined){
        throw new Error(`error to insert content for ${name}`)
      }
      const resultImage = await dbInsertImage(imageJson)
      if(resultImage === undefined){
        throw new Error(`error to insert image for ${name}`)
      }
      const {imageSubDir} = imageJson;
      await moveFinal(webpFile, imageSubDir)
      await moveDone(imageFile);
      await moveDone(contentFile);
    } catch (err) {
      if(err.message === 'INVALID_WEBP'){
        logger.error('move all file to invalid folder');
        await moveInvalidWebp(imageFile)
        await moveInvalidWebp(contentFile)
        await moveInvalidWebp(webpFile)
        continue;
      }
      console.log(err.stack)
      logger.error(err.message)
    }
  }
  
}

main()