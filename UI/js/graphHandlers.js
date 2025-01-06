import {getBacklinksByContentId} from './serverApi.js'
import {mkNetworkData} from './dataHandlers.js'


export default (Graph) => {
  const handleClickNode = (lastNetworkData) => async (node)  => {
    console.log(node)
    const {id, isContent} = node;
    if(!isContent){
      return false
    }
    console.log(id, isContent)
    const rows = await getBacklinksByContentId(id)
    lastNetworkData = mkNetworkData(rows, node.id, lastNetworkData);
    console.log(lastNetworkData)
    Graph.graphData(lastNetworkData)
  }
  
  return {handleClickNode}
}
