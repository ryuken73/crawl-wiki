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
const query = async (text, params) => {
  try {
    const start = Date.now(); // 쿼리 성능 측정용
    const result = await pool.query(text, params);
    const duration = Date.now() - start;
    // console.log('Executed query', { text, duration, rows: result.rowCount });
    return result;
  } catch (error) {
    console.error('Database query error', { text, error });
    throw error; // 필요시 호출 측에서 처리
  }
};

const createCursor = async (selectSQL) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    // const cursorName = Date.now();
    const cursorName = 'myCursor'
    await client.query(`DECLARE ${cursorName} CURSOR FOR ${selectSQL}`);
    const getNextChunk = async (chunkSize) => {
      const result = await pool.query(`FETCH ${chunkSize} FROM ${cursorName}`);
      if(result.rows.length === 0){
        await client.query(`CLOSE ${cursorName}`);
        return []
      }
      return result.rows;
    }
    return {getNextChunk};
  } catch (err) {
    console.error(err.message);
    throw new Error('error in createCursor');
  } finally {
    client.release();
  }
}

// Pool을 닫는 함수 (필요시 호출)
const closePool = async () => {
  await pool.end();
  console.log('Database connection pool closed');
};

module.exports = { 
  query, 
  closePool,
  createCursor 
};