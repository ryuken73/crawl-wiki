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
  const gData = rows.reduce((acct, row, index) => {
    if(row.content_id === null){
      return acct
    }
      console.log(`${row.backlink_text} is not just backlink. add `)
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
  console.log('gData=', gData)
  // if(gData.links.length === 0){
  //   return gData;
  // }
  // gData.links.forEach(link => {
  //   console.log(link)
  //   // const a = gData.nodes[link.source];
  //   // const b = gData.nodes[link.target];
  //   const a = gData.nodes.find(node => node.id === link.source);
  //   const b = gData.nodes.find(node => node.id === link.target);
  //   console.log(a, b)
  //   !a.neighbors && (a.neighbors = []);
  //   !b.neighbors && (b.neighbors = []);
  //   a.neighbors.push(b);
  //   b.neighbors.push(a);

  //   !a.links && (a.links = []);
  //   !b.links && (b.links = []);
  //   a.links.push(link);
  //   b.links.push(link);
  // });
  return gData;
}