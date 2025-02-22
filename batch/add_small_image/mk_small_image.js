const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// const inputDir = 'D:/002.Code/002.node/crawl-wiki/images/언론인_한국';
// const inputDir = 'D:/002.Code/002.node/crawl-wiki/images/가수_한국';
// const inputDir = 'D:/002.Code/002.node/crawl-wiki/images/정치인_한국';
// const inputDir = 'D:/002.Code/002.node/crawl-wiki/images/코미디언_한국';
const inputDir = 'D:/002.Code/002.node/crawl-wiki/images/배우_한국';
const outputDir = path.join(inputDir, 'w200');
const targetWidth = 200;      // 변환할 기준 해상도

// 폴더 없으면 생성
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// 이미지 변환 또는 복사 함수
async function processImage(file) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  try {
    const metadata = await sharp(inputPath).metadata();
    if (metadata.width <= targetWidth) {
      // 원본 해상도가 이미 작으면 그냥 복사
      fs.copyFileSync(inputPath, outputPath);
      console.log(`🔄 Copied (no resize needed): ${file}`);
    } else {
      // 원본 해상도가 크면 리사이징
      await sharp(inputPath)
        .resize({ width: targetWidth }) // 너비를 targetWidth로 리사이징
        .toFile(outputPath);
      console.log(`✅ Resized: ${file}`);
    }
  } catch (err) {
    console.error(`❌ Error processing ${file}:`, err);
  }
}

// 디렉토리 내 파일 처리
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('❌ Failed to read directory:', err);
    return;
  }

  files.forEach(file => {
    if (/\.(jpe?g|png|webp)$/i.test(file)) { // 지원하는 확장자만 처리
      processImage(file);
    }
  });
});
