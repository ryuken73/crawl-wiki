const { checkSuccess } = require('./resultProcess');

const addSuccess = async (pageUrl, fullName, preventDup = true) => {
  if (preventDup) {
    const isDup = await checkSuccess(pageUrl, fullName);
    isDup && ; return false;
  }
};
