const fastify = require('fastify')();
const cors = require('@fastify/cors');
const sqls = require('./server_sql');
const {DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT, IMG_ROOT_PATH} = process.env;

fastify.register(cors, {
  origin: "*",
  methods: ['GET', 'POST']
})

fastify.register(require('@fastify/postgres'), {
  connectionString: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  name: 'wikiDB'
})
fastify.register(require('./miniSearch_plugin'))

fastify.get('/backlinks/byContentName/:name', (req, reply) => {
  fastify.pg.wikiDB.query( `${sqls.backlinks} WHERE c.content_name = $1`, [req.params.name],
    function onResult (err, result) {
      reply.send(err || result)
    }
  )
})
fastify.get('/backlinks/byContentId/:id', (req, reply) => {
  fastify.pg.wikiDB.query( `${sqls.backlinksByContentId} WHERE cb.content_id = $1`, [req.params.id],
    function onResult (err, result) {
      reply.send(err || result)
    }
  )
})
fastify.get('/forwardlinks/byBacklinkId/:id', (req, reply) => {
  fastify.pg.wikiDB.query( `${sqls.forwardlinkByBacklinkId} WHERE b.backlink_id = $1`, [req.params.id],
    function onResult (err, result) {
      reply.send(err || result)
    }
  )
})
fastify.get('/content/:id', (req, reply) => {
  fastify.pg.wikiDB.query( `${sqls.content} where c.content_id = $1`, [req.params.id],
    function onResult (err, result) {
      reply.send(err || result)
    }
  )
})
fastify.get('/backlinkId-fromContentId/:id', (req, reply) => {
  fastify.pg.wikiDB.query( `${sqls.backlinkIdFromContentId} where c.content_id = $1`, [req.params.id],
    function onResult (err, result) {
      reply.send(err || result)
    }
  )
})
fastify.get('/contentId-backlinkId/:id', (req, reply) => {
  fastify.pg.wikiDB.query( `${sqls.contentIdFromBacklinkId} where b.backlink_id = $1`, [req.params.id],
    function onResult (err, result) {
      reply.send(err || result)
    }
  )
})
fastify.get('/nodeByContentId/:id', (req, reply) => {
  fastify.pg.wikiDB.query( `${sqls.nodeByContentId} where c.content_id = $1`, [req.params.id],
    function onResult (err, result) {
      reply.send(err || result)
    }
  )
})
fastify.get('/nodeByBacklinkId/:id', (req, reply) => {
  fastify.pg.wikiDB.query( `${sqls.nodeByBacklinkId} where b.backlink_id = $1`, [parseInt(req.params.id)],
    function onResult (err, result) {
      reply.send(err || result)
    }
  )
})
fastify.get('/search/:keyword', (req, reply) => {
  console.log('searching ', req.params.keyword)
  const searchResult = fastify.searchEngine.search(req.params.keyword)
  console.log(searchResult)
  reply.send(searchResult)
})
fastify.get('/autoSuggest/:keyword', (req, reply) => {
  console.log('autoSuggest ', req.params.keyword)
  const autoSuggestOpts = {
    fields: ['textToIndex'],
  }
  const suggestResult = fastify.searchEngine.autoSuggest(req.params.keyword, autoSuggestOpts)
  console.log(suggestResult)
  reply.send(suggestResult)
})
fastify.get('/imageByContentId/:id', (req, reply) => {
  fastify.pg.wikiDB.query( `${sqls.getImageByContentId} where content_id = $1`, [req.params.id],
    function onResult (err, result) {
      reply.send(err || result)
    }
  )
})

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // 특수문자 앞에 백슬래시 추가
}
const subquery = sqls.subquery;
const safeSubquery = escapeRegExp(sqls.subquery);
const sqlSubQuery = new RegExp(`${safeSubquery}([\\s\\S]*)`);
const LINK_GET_SQLS = {
  'backlink': {
    'byContentId': `${sqls.backlinksByContentId} where cb.content_id = $`,
    'byBacklinkId': `${sqls.backlinksByBacklinkId} where b.backlink_id = $`,
  },
  'forwardlink': {
    'byContentId': `${sqls.forwardlinkByContentId} where n.content_id = $`,
    'byBacklinkId': `${sqls.forwardlinkByBacklinkId} where b.backlink_id =$`,
  }
}
fastify.post('/related/:linkType', (req, reply) => {
  const linkType = req.params.linkType;
  const nodes = JSON.parse(req.body);
  const params = [];
  const sqls = nodes.map((node, index) => {
    const {content_id, backlink_id} = node;
    const byWhat = content_id ? 'byContentId':'byBacklinkId';
    const sql = `${LINK_GET_SQLS[linkType][byWhat]}${index+1}\n`;
    const sqlWithoutSubquery = sql.match(sqlSubQuery)[1];
    content_id ? params.push(content_id) : params.push(backlink_id);
    return `(${sqlWithoutSubquery})`
  })
  const sql = subquery + '\n' + sqls.join(' intersect ')
  fastify.pg.wikiDB.query( sql, params,
    function onResult (err, result) {
      reply.send(err || result)
    }
  )
})

fastify.register(require('@fastify/static'), {
  root: IMG_ROOT_PATH,
})

fastify.listen({ port: 2025 }, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`);
  console.log(`get all documents to index searchEngine...wait..`);
  // fastify.pg.wikiDB.query(sqls.getAllContentsNBacklinks, [], 
  fastify.pg.wikiDB.query(sqls.allNodes, [], 
    async function onResult (err, result) {
      console.log('total count of documents=', result.rowCount);
      // const {addAllAsync, addDocument} = initializeSearchEngine();
      console.log('start bulk indexing...wait..');
      let processed = 0;
      for(let document of result.rows){
        const indexFieldAdded = {
          ...document,
          textToIndex: document.text
        }
        fastify.searchEngine.addDocument(indexFieldAdded)
        ++processed
        if(processed % 1000 === 0){
          console.log('processed:', processed)
        }
      }
      console.log('processed:', processed)
      // const indexed = await addAllAsync(result.rows);
      console.log('done bulk indexing!');
    }
  );
  
})