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
const dbGetNextSeqIdWithoutPadding = async (dbSeqName) => {
  const queryText = `SELECT nextval('${dbSeqName}') as padded_sequence`
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
const dbIsDuplicateLink = async (href) => {
  const queryText = "select backlink_id from person.backlinks where backlink_url = $1"
  const result = await db.query(queryText, [href]);
  if(result.rows.length > 0){
    return {isDup: true, backlinkId: result.rows[0].backlink_id};
  }
  return {isDup: false}
}
const dbIsDuplicateMap = async (contentId, backlinkId) => {
  const queryText = "select content_id from person.contents_backlinks where content_id = $1 and backlink_id = $2"
  const result = await db.query(queryText, [contentId, backlinkId]);
  if(result.rows.length > 0){
    return true
  }
  return false;
}
const dbIsDuplicateSQL = async (selectSQL, params) => {
  const result = await db.query(selectSQL, [...params]);
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
const dbGetCursor = async (cursorName, sql) => {
  const sqlForCursor = sql || 'select content_id, additional_info_raw from person.contents';
  return await db.createCursor(cursorName, sqlForCursor);
}
const dbBeginTx = async () => {
  return await db.txBegin();
}
const dbTXUpdateAdditionalInfo = async (contentId, additionalInfo, cursorQuery) => {
  // console.log(contentId, additionalInfo)
  const queryText = `
    UPDATE person.contents 
    set additional_info = $1::jsonb
    where content_id = $2 
  `;
  const params = [JSON.stringify(additionalInfo), contentId];
  const result = await cursorQuery(queryText, params);
  return result
}
const dbInsertMapTable = async (contentId, backlinkId, cursorQuery = null) => {
  const isDupMap = await dbIsDuplicateMap(contentId, backlinkId);
  if(isDupMap){
    console.log('mapping alreay exists. skip...')
    return 
  }
  const query = cursorQuery || db.query;
  const queryText = `
    insert into person.contents_backlinks (content_id, backlink_id)
    values($1, $2) returning *
  `
  const params = [contentId, backlinkId]
  try {
    const result = await query(queryText, params);
    return result
  } catch (err) {
    if(err.code === '23505') // mapping already exists
    console.log('mapping already exists. skip...')
  }
}
const dbTXInsertBacklink = async (contentId, backlink_text, backlink_url, cursorQuery) => {
  const backlink_id = await dbGetNextSeqIdWithoutPadding('person.backlink_id_seq');
  const sqlInsertToBacklinks = `
    insert into person.backlinks (backlink_id, backlink_text, backlink_url)
    values($1, $2, $3) returning *
  `
  const params = [backlink_id, backlink_text, backlink_url]
  const result = await cursorQuery(sqlInsertToBacklinks, params)
  if(parseInt(result.rowCount) !== 1){
    throw new Error(`error to insert person.backlinks ${backlink_text}`)
  }
  const result1 = await dbInsertMapTable(contentId, backlink_id, cursorQuery)
  if(parseInt(result1.rowCount) === 1){
    return result1.rows
  } else {
    throw new Error(`error to insert person.contents_backlinks ${backlink_text}`)
  }
}
const dbInsertBacklinkHistory = async (contentId, backlinkCount, cursorQuery = null) => {
  const query = cursorQuery || db.query;
  const queryText = `
    insert into person.backlink_crawl_history (content_id, backlink_count)
    values($1, $2) returning *
  `
  const params = [contentId, backlinkCount]
  const result = await query(queryText, params);
  return result;
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
  dbGetNextSeqIdWithoutPadding,
  dbResetNextSeqId,
  dbIsDuplicateRecord,
  dbIsDuplicateLink,
  dbInsertContent,
  dbInsertImage,
  dbInsertMapTable,
  dbBeginTx,
  dbGetCursor,
  dbTXUpdateAdditionalInfo,
  dbTXInsertBacklink,
  dbInsertBacklinkHistory
};
