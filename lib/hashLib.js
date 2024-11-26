const fs = require('fs');
const crypto = require('crypto');

const getStringHash = (str) => {
  return crypto.createHash('sha256').update(str, 'utf8').digest('hex');
}

const getFileHash = (filePath) => {
  let stream
  try {
    stream = fs.createReadStream(filePath);
  } catch (err) {
    return Promise.reject(0);
  }
  const hash = crypto.createHash('sha256');
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => {
      hash.update(chunk);  // 파일 내용을 해시 객체에 업데이트
    });

    stream.on('end', () => {
      const value = hash.digest('hex');
      resolve(value)
    });

    stream.on('error', (err) => {
      console.error('Error reading file:', err);
      reject('0');
    });
  })
}

module.exports = {
  getStringHash,
  getFileHash
}
