const MiniSearch = require('minisearch');
const hangul = require('hangul-js');

const DEFAULT_SEARCH_OPTION = {
  prefix: true,
  combineWith: 'AND'
  // fuzzy: 0.3
}

const createSearchEngine = (options, searchOptions={}) => {
  const mixedSearchOptions = {
    ...DEFAULT_SEARCH_OPTION,
    searchOptions
  }
  const {fields, storeFields, idField, extractField} = options;
  const searchEngine = new MiniSearch({
    fields,
    storeFields,
    idField,
    extractField
  })
  const addAllAsync = async (documents) => {
    return searchEngine.addAllAsync(documents)
  }
  const addDocument = (document) => {
    return searchEngine.add(document)
  }
  const search = (keyword) => {
    const searchPattern = hangul.disassemble(keyword).join('')||MiniSearch.wildcard;
    return searchEngine.search(searchPattern, mixedSearchOptions)
  }
  const autoSuggest = (keyword) => {
    const searchPattern = hangul.disassemble(keyword).join('')||MiniSearch.wildcard;
    const disassembledResults = searchEngine.autoSuggest(searchPattern)
    console.log(disassembledResults)
    return disassembledResults.map(result => {
      return {
        ...result,
        suggestionAssembled: hangul.assemble(result.suggestion)
      }
    })
  }
  return {
    addAllAsync,
    addDocument,
    search,
    autoSuggest
  }
}

module.exports = createSearchEngine;