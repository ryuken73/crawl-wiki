const {addSuccess, checkSuccess} = require('./resultProcess');


async function main(){
  addSuccess('/1/2', '류건우');
  addSuccess('/1/2', '류건우1');

  console.log(await checkSuccess('/1/2', '류건우'))
  console.log(await checkSuccess('/1/2', '류건우1'))
  console.log(await checkSuccess('/1/2', '류건우2'))
  console.log(await checkSuccess('/1/2', '류건'))
}

main();