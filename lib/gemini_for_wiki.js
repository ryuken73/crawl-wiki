const {createGemini} = require('./gemini_core');
const {key} = require('../gemini_api_key.json');

const createChat = async (options) => {
  const genAI = createGemini(key);
  const model = await genAI.createNormalModel(options);
  const chatSession = genAI.startNewChat(model);
  const setupChatRule = async (instruction) => {
    await genAI.sendChatMessage(chatSession, instruction);
    console.log('gemini ready');
  }
  const callGemini = async (strSepBySharp) => {
    return await genAI.sendChatMessage(chatSession, strSepBySharp)
  }
  return {
    setupChatRule,
    callGemini
  };
}
const createGenativeAI = async (options) => {
  const genAI = createGemini(key);
  const model = await genAI.createNormalModel(options);
  const callGemini = async (prompt) => {
    return await genAI.sendGenRequest(model, prompt)
  }
  return {
    callGemini
  }
}

module.exports = {
  createChat,
  createGenativeAI
}