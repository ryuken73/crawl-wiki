const fastify = require('fastify')();
const cors = require('@fastify/cors');
const sqls = require('./server_sql');
const {DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT} = process.env;

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
  fastify.pg.wikiDB.query( `${sqls.backlinks} WHERE c.content_id = $1`, [req.params.id],
    function onResult (err, result) {
      reply.send(err || result)
    }
  )
})
fastify.get('/forwardlinks/byBacklinkId/:id', (req, reply) => {
  fastify.pg.wikiDB.query( `${sqls.forwardlinks} WHERE fc.backlink_id = $1`, [req.params.id],
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
  fastify.pg.wikiDB.query( `${sqls.getNodeByContentId} where c.content_id = $1`, [req.params.id],
    function onResult (err, result) {
      reply.send(err || result)
    }
  )
})
fastify.get('/nodeByBacklinkId/:id', (req, reply) => {
  fastify.pg.wikiDB.query( `${sqls.getNodeByBacklinkId} where b.backlink_id = $1`, [req.params.id],
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

fastify.listen({ port: 2025 }, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`);
  console.log(`get all documents to index searchEngine...wait..`);
  fastify.pg.wikiDB.query(sqls.getAllContentsNBacklinks, [], 
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