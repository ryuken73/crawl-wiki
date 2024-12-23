const { Pool } = require('pg');
require('dotenv').config();

// Connection Pool 설정
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: 10, // 최대 연결 수
  idleTimeoutMillis: 30000, // 유휴 연결 대기 시간
});

// 공통 query 함수
const query = async (text, params, client = null) => {
  const connection = client || pool;
  try {
    const start = Date.now(); // 쿼리 성능 측정용
    const result = await connection.query(text, params);
    const duration = Date.now() - start;
    // console.log('Executed query', { text, duration, rows: result.rowCount });
    return result;
  } catch (error) {
    console.error('Database query error', { text, error });
    throw error; // 필요시 호출 측에서 처리
  }
};
// const queryCursor = async (text, params, client) => {
//   try {
//     const result = await query(text, params, client)
//     return result;
//   } catch (error) {
//     console.error('queryCursor error', { text, error });
//     await rollbackCursor(client);
//     client.release();
//     throw error; 
//   }
// }
// const commitCursor = async (client) => {
//   try {
//     await client.query('COMMIT');
//   } catch (error) {
//     console.error('commitCursor error');
//     await client.query(`CLOSE ${cursorName}`);
//     client.release();
//     throw error; 
//   }
// }
// const rollbackCursor = async (client) => {
//   try {
//     await client.query('ROLLBACK');
//   } catch (error) {
//     console.error('rollbackCursor error');
//     await client.query(`CLOSE ${cursorName}`);
//     client.release();
//     throw error; 
//   }
// }

// const createCursor = async (selectSQL) => {
//   const client = await pool.connect();
//   const cursorName = 'myCursor'
//   await client.query(`DECLARE ${cursorName} CURSOR FOR ${selectSQL}`);
//   try {
//     await client.query('BEGIN');
//     // const cursorName = Date.now();
//     const getNextChunk = async (chunkSize) => {
//       const result = await client.query(`FETCH ${chunkSize} FROM ${cursorName}`);
//       if(result.rows.length === 0){
//         console.log('close cursor:', cursorName)
//         await client.query(`CLOSE ${cursorName}`);
//         client.release();
//         return []
//       }
//       return result.rows;
//     }
//     return {getNextChunk, client};
//   } catch (err) {
//     console.error(err.message);
//     throw new Error('error in createCursor');
//   } 
// }
const txBegin = async () => {
  const txClient = await pool.connect();
  await txClient.query('BEGIN');
  const txQuery = async (sql, params) => {
    try {
      const result = await query(sql, params, txClient)
      return result;
    } catch (error) {
      console.error('queryCursor error', { text, error });
      throw error; 
    }
  }
  const txCommit = async () => await txClient.query('COMMIT');
  const txRollback = async () => await txClient.query('ROLLBACK');
  const txRelease = () => txClient.release();
  return {
    txQuery,
    txCommit,
    txRollback,
    txRelease
  }
}

const createCursor = async (cursorName='myCursor', selectSQL) => {
  console.log('createCursor:', cursorName, selectSQL)
  const client = await pool.connect();
  await client.query('BEGIN');
  await client.query(`DECLARE ${cursorName} CURSOR FOR ${selectSQL}`);
  try {
    const cursorBegin = async () => await client.query('BEGIN');
    const cursorCommit = async () => await client.query('COMMIT');
    const cursorRollback = async () => await client.query('ROLLBACK');
    const cursorClose = async () => await client.query(`CLOSE ${cursorName}`);
    const cursorQuery = async (text, params) => {
      try {
        const result = await query(text, params, client)
        return result;
      } catch (error) {
        console.error('queryCursor error', { text, error });
        await cursorRollback(client);
        client.release();
        throw error; 
      }
    }
    const getNextChunk = async (chunkSize) => {
      const result = await client.query(`FETCH ${chunkSize} FROM ${cursorName}`);
      if(result.rows.length === 0){
        console.log('close cursor:', cursorName)
        // await client.query(`CLOSE ${cursorName}`);
        // await cursorCommit();
        await cursorClose();
        client.release();
        return []
      }
      return result.rows;
    }
    return {
      cursorBegin, 
      cursorClose, 
      cursorCommit,
      cursorRollback,
      cursorQuery,
      getNextChunk
    };
  } catch (err) {
    console.error(err.message);
    throw new Error('error in createCursor');
  } 
}

// Pool을 닫는 함수 (필요시 호출)
const closePool = async () => {
  await pool.end();
  console.log('Database connection pool closed');
};

module.exports = { 
  query, 
  // queryCursor,
  // commitCursor,
  // rollbackCursor,
  txBegin,
  closePool,
  createCursor 
};