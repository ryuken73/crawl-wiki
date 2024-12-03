const db = require('./db');

// 사용자 관련 쿼리들
const dbGetCurrentSeqId = async (dbSeqName) => {
  const queryText = `SELECT LPAD(currval('${dbSeqName}')::TEXT, 6, '0') as padded_sequence`
  const result = await db.query(queryText);
  return result.rows[0].padded_sequence;
};
const dbGetNextSeqId = async (dbSeqName) => {
  const queryText = `SELECT LPAD(nextval('${dbSeqName}')::TEXT, 6, '0') as padded_sequence`
  const result = await db.query(queryText);
  return result.rows[0].padded_sequence;
};
const dbResetNextSeqId = async (dbSeqName) => {
  const queryText = `SELECT SETVAL('${dbSeqName}', 1, false)`
  const result = await db.query(queryText);
  return result.rows[0];
};
const dbIsDuplicateRecord = async (href) => {
  const queryText = "select content_id from person.contents where content_url = $1"
  const result = await db.query(queryText, [href]);
  if(result.rows.length > 0){
    return true
  }
  return false;
}
const dbInsertContent = async (contentInfo) => {
  const {
    contentId,
    contentName,
    contentUrl,
    contentHash,
    metadata
  } = contentInfo
  const queryText = `INSERT INTO person.contents (
                      content_id,
                      content_name,
                      content_url,
                      content_hash,
                      additional_info_raw
                    ) VALUES ($1, $2, $3, $4, $5) 
                    RETURNING *`;

  console.log('####',metadata.length)
  const params = [contentId, contentName, contentUrl, contentHash, metadata]
  const result = await db.query(queryText, params);
  return result.rows[0];
}
const dbInsertImage = async (imageInfo) => {
  const {
    imageId,
    contentId,
    imageSubDir,
    imageName,
    imageUrl,
    imageHash,
  } = imageInfo
  const queryText = `INSERT INTO person.images (
                      image_id,
                      content_id,
                      image_subdir,
                      image_name,
                      image_url,
                      image_hash
                    ) VALUES ($1, $2, $3, $4, $5, $6) 
                    RETURNING *`;
  const params = [imageId, contentId, imageSubDir, imageName, imageUrl, imageHash]
  const result = await db.query(queryText, params);
  return result.rows[0];
}
const dbSelectContentByChunk = async (sql) => {
  const sqlForCursor = sql || 'select content_id, additional_info_raw from person.contents';
  const {getNextChunk} = await db.createCursor(sqlForCursor);
  return getNextChunk;
}

const dbCreateUser = async (name, email) => {
  const queryText = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
  const params = [name, email];
  const result = await db.query(queryText, params);
  return result.rows[0];
};

const dbDeleteUser = async (id) => {
  const queryText = 'DELETE FROM users WHERE id = $1 RETURNING *';
  const params = [id];
  const result = await db.query(queryText, params);
  return result.rows[0];
};


module.exports = {
  dbGetCurrentSeqId,
  dbGetNextSeqId,
  dbResetNextSeqId,
  dbIsDuplicateRecord,
  dbInsertContent,
  dbInsertImage,
  dbSelectContentByChunk
};
