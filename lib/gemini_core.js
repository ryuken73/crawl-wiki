const {GoogleGenerativeAI} = require('@google/generative-ai');
const {GoogleAICacheManager} = require('@google/generative-ai/server');

const MODELS = {
  'flash': 'gemini-1.5-flash',
  'flash-8B': 'gemini-1.5-flash-8b',
  'pro': 'gemini-1.5-pro',
}
const CONFIG_FOR_JSON = {
	temperature: 0.9,
	topK: 1,
	topP: 1,
	response_mime_type:'application/json'
}

class GEMINI_CORE {
  constructor (apikey){
    this.apikey = apikey;
    this.model = null;
    this.chatSession = null;
  }
  createNormalModel = async (options) => {  
    const {model, systemInstruction='', generationConfig=CONFIG_FOR_JSON} = options;
    console.log(generationConfig)
    const genAI = new GoogleGenerativeAI(this.apikey);
    this.model = genAI.getGenerativeModel({
      model:MODELS[model],
      systemInstruction,
      generationConfig
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
  isBlocked = (candidate) => {
    return candidate.content === undefined && candidate.finishReason === 'BLOCKLIST';
  }
  sendGenRequest = async (model=this.model, prompt) => {
    try {
      const result = await model.generateContent(prompt);
      const {candidates, usageMetadata, text} = result.response;
      const firstCandidate = candidates[0];
      console.log(firstCandidate);
      if(this.isBlocked(firstCandidate)){
        return {success: false, reason: firstCandidate.finishReason};
      }
      candidates.forEach((candidate, i) => {
        // console.log(`[gemini]candidate[${i}] detail = `, candidate.content)
      });
      console.log('[gemini]usage = ', usageMetadata);
      console.log('[gemini]text = ', text());
      return {success: true, text: text()};
      // return text();
    } catch (err) {
      console.error(err)
      throw new Error('error in sendGenRequest')
    }
  }
  sendChatMessage = async (chatSession=this.chatSession, prompt) => {
    try {
      const result = await chatSession.sendMessage(prompt);
      const {candidates, usageMetadata, text} = result.response;
      console.log('[gemini]number of candidates = ', candidates.length);
      // console.log(candidates)
      candidates.forEach((candidate, i) => {
        // console.log(`[gemini]candidate[${i}] detail = `, candidate.content)
      });
      console.log('[gemini]usage = ', usageMetadata);
      console.log('[gemini]text = ', text());
      return text();
    } catch (err) {
      console.error(err)
      throw new Error('error in sendChatMessage')
    }
  }
}

const createGemini = (apikey) => {
  return new GEMINI_CORE(apikey)
}

module.exports = {
  createGemini,
}
