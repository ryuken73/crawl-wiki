const fs = require('fs');


async function main(){
  const txt = await fs.promises.readFile('./not_encoded.txt');
  const arry = txt.toString().split('\r\n')
  for(let record of arry){
    const [content_id, content_url_raw] = record.split('\t')
    const content_url_encoded = encodeURI(content_url_raw.replaceAll('"',''));
    const updateSQL = `update person.contents set content_url = '${content_url_encoded}' where content_id = '${content_id.replaceAll('"', '')}';`
    console.log(updateSQL);
  }

}

main()