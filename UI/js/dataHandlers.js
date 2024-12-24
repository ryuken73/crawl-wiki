import { COLORS } from "./constants.js";


const isNewNode = (row, prevResult) => {
  // console.log('prevNetworkData:', prevResult.nodes)
  const prevNodes = prevResult.nodes;
  const dupNode = prevNodes.find(node => {
    return node.id === row.content_id || node.id === row.backlink_id
  })
  if(dupNode){
    console.log(`${row.backlink_text} ${row.content_name} isDup:`, dupNode);
  }
  return !dupNode;
}

export const mkNetworkData = (rows, sourceId, prevResult={nodes:[], links:[]}) => {
  return rows.reduce((acct, row, index) => {
    const newNodes = isNewNode(row, prevResult) ?
    [
      ...acct.nodes,
      {
        id: row.content_id || row.backlink_id,
        text: row.backlink_text,
        color: row.content_id ? COLORS.person : COLORS.other,
        value: row.count === "0" ? 1 : parseInt(row.count),
        isPerson: row.content_id ? true : false
      }
    ]:[
      ...acct.nodes
    ]
    const newLinks = [
      ...acct.links,
      {
        source: sourceId,
        target: row.content_id || row.backlink_id
      }
    ]
    return {
      nodes: newNodes,
      links: newLinks
    }
  }, prevResult)
}