const createBrowser = require('./lib/browser');
const getBacklinks = require('./lib/getBacklinks');
const {create, setLevel} = require('./lib/logger')();
const {
  dbBeginTx,
  dbGetNextSeqIdWithoutPadding,
  dbGetCursor,
  dbIsDuplicateLink,
  dbTXInsertBacklink,
  dbInsertMapTable,
  dbInsertBacklinkHistory
} = require('./lib/queries');

const NUMBER_OF_CHUNKS = 1;
const logger = create({logFile:'crawl_wiki.log'});

async function main(){
  const options = {};
  const browser = await createBrowser(null, options);
  // set cursor getContents (chunk_size = 100)
  const sql = `select c.content_id, c.content_url
    from person.contents c left outer join person.backlink_count bc
    on c.content_id = bc.content_id
    where bc.backlink_count is null
    order by c.content_id desc`;
  const cursorName = 'c_getContents';
  const {getNextChunk, cursorCommit, cursorClose} = await dbGetCursor(cursorName, sql);
  let processed = 0;
  while(true){
    const contents = await getNextChunk(NUMBER_OF_CHUNKS)
    if(contents.length === 0){
      break;
    }
    for(let content of contents){
      const {content_id, content_url} = content;
      const results = await getBacklinks(browser, content_url);
      for(let result of results){
        const {linkText, linkHref} =  result;
        const {isDup, backlinkId} = await dbIsDuplicateLink(linkHref);
        if(isDup){
          console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
          console.log('already exists.. only insert map table:', content_id, backlinkId);
          console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
          await dbInsertMapTable(content_id, backlinkId);
          continue;
        }
        let txRollback, txRelease;
        try {
          const {txQuery, txCommit, txRollback: rollback, txRelease: release} = await dbBeginTx();
          txRollback = rollback;
          txRelease = release;
          await dbTXInsertBacklink(content_id, linkText, linkHref, txQuery);
          console.log('insert record success:', linkText);
          txCommit();
        } catch(err) {
          console.error(err.stack);
          await txRollback()
        } finally {
          txRelease();
        }
      }
      const backlinks = results;
      await dbInsertBacklinkHistory(content_id, backlinks.length)
    }
  }
  // do while getNextChunk
  //  get content_id, content_url from contens table
  //  get backlinks using getBackLinks
  //  for each backlink
  //   begin transaction 
  //    insert backlink to backlinks table
  //    (input: backlink_url(linkHref), backlink_text(linkText)) (return backlink_id)
  //    insert contents_backlinks table using (content_id, backlink_id)
  //   commit
  // close cursor

  console.log(results)
}

main()