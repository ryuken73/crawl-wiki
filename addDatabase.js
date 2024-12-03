const fs = require('fs');
const path = require('path');
const {
  utilReadJsonFile,
  utilGetJsonWebpFileList,
  utilIsWebpFile,
  wikiSeparateFileType,
  wikiGetNameFromFname,
  wikiGetImageFileWithName,
  wikiGetWebpImageFileWithName
} = require('./lib/util')
const {
  dbInsertContent,
  dbInsertImage
} = require('./lib/queries');

const BASE_FOLDER = 'D:/002.Code/002.node/crawl-wiki/work';
const WORKING_FOLDER_NAME = '2024-12-02 16.44.51';

async function main(){
  let contentsFiles, imageFiles, webpFiles;
  try {
    const workingFoler = path.join(BASE_FOLDER, WORKING_FOLDER_NAME);
    const flist = await utilGetJsonWebpFileList(workingFoler);
    const files = wikiSeparateFileType(flist);
    contentsFiles = files[0];
    imageFiles = files[1];
    webpFiles = files[2];
  } catch (err) {
    console.error(err)
    process.exit()
  }

  for(let contentFile of contentsFiles){
    const name = wikiGetNameFromFname(contentFile);
    const webpFileWithName = wikiGetWebpImageFileWithName(webpFiles, name)
    if(webpFileWithName.length > 1){
      throw new Error(`webp file for ${name} should be one but ${webpFileWithName.length}`)
    } 
    if(!await utilIsWebpFile(webpFileWithName[0])){
      throw new Error(`${webpFileWithName[0]} is not valid webp file type`);
    }
    const imageFilesWithName = wikiGetImageFileWithName(imageFiles, name);
    if(imageFilesWithName.length > 1){
      throw new Error(`image meta file for ${name} should be one but ${imageFilesWithName.length}`)
    }
    const imageFile = imageFilesWithName[0];
    console.log('processing..', name, imageFile);
    const contentJson = await utilReadJsonFile(contentFile)
    const imageJson = await utilReadJsonFile(imageFile)
    try {
      const resultContent = await dbInsertContent(contentJson);
      if(resultContent === undefined){
        throw new Error(`error to insert content for ${name}`)
      }
      const resultImage = await dbInsertImage(imageJson)
      if(resultImage === undefined){
        throw new Error(`error to insert image for ${name}`)
      }
    } catch (err) {
      console.error(err)
    }
  }
  
}

main()