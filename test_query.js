const {dbSelectContentByChunk} = require('./lib/queries')

async function main() {
  const getNextChunk = await dbSelectContentByChunk();
  let hasMoreRows = true
  while(hasMoreRows){
    const rows = await getNextChunk(3);
    if(rows.length === 0){
      break;
    }
    console.log(rows);
    console.log('##################')
  }
}

main()