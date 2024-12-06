const {GoogleGenerativeAI} = require('@google/generative-ai');
const {GoogleAICacheManager} = require('@google/generative-ai/server');

const MODELS = {
  'flash': 'gemini-1.5-flash',
  'flash-8B': 'gemini-1.5-flash-8b',
  'pro': 'gemini-1.5-pro',
}

class GEMINI_CORE {
  constructor (apikey){
    this.apikey = apikey;
    this.model = null;
    this.chatSession = null;
  }
  createNormalModel = async (options) => {  
    const {model, systemInstruction=''} = options;
    const genAI = new GoogleGenerativeAI(this.apikey);
    this.model = genAI.getGenerativeModel({
      model:MODELS[model],
      systemInstruction
    });
    return this.model
  }
  createCachedModel = async (options) => {
    this.cacheManager = new GoogleAICacheManager(this.apikey);
    const {model, displayName, systemInstruction, ttl} = options;
    const cache = await cacheManager.create({
      model: MODELS[model],
      displayName,
      systemInstruction,
      ttlSeconds: ttl
    })
    const genAI = new GoogleGenerativeAI(this.apikey);
    this.model = genAI.getGenerativeModelFromCachedContent(cache);
    return this.model;
  }
  startNewChat = (model=this.model) => {
    this.chatSession = model.startChat({
      history: []
    })
    return this.chatSession;
  }
  sendGenRequest = async (model=this.model, prompt) => {
    const result = await model.generateContent(prompt);
    const {candidates, usageMetadata, text} = result.response;
    candidates.forEach((candidate, i) => {
      console.log(`[gemini]candidate[${i}] detail = `, candidate.content)
    });
    console.log('[gemini]usage = ', usageMetadata);
    return text();
  }
  sendChatMessage = async (chatSession=this.chatSession, prompt) => {
    const result = await chatSession.sendMessage(prompt);
    const {candidates, usageMetadata, text} = result.response;
    console.log('[gemini]number of candidates = ', candidates.length);
    candidates.forEach((candidate, i) => {
      console.log(`[gemini]candidate[${i}] detail = `, candidate.content)
    });
    console.log('[gemini]usage = ', usageMetadata);
    console.log('[gemini]text = ', text());
    return text();
  }
}

const createGemini = (apikey) => {
  return new GEMINI_CORE(apikey)
}

module.exports = {
  createGemini
}
