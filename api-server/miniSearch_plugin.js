const fastifyPlugin = require('fastify-plugin');
const hangul = require('hangul-js')
const createSearchEngine = require('./searchEngine');

const initializeSearchEngine = (fastify, options) => {
  const minisearchOpts = {
    fields: ['textToIndex'],
    storeFields: ['id','textToIndex', 'text', 'primary_category', 'url'],
    idField: 'id',
    extractField: (document, fieldName) => {
      if(fieldName === 'textToIndex'){
        return hangul.disassemble(document[fieldName]).join('');
      }
      return document[fieldName]
    }
  }
  const searchOptions = {
    fields: ['text']
  }
  const searchEngine = createSearchEngine(minisearchOpts, searchOptions);
  fastify.decorate('searchEngine', searchEngine);
}

module.exports = fastifyPlugin(initializeSearchEngine)