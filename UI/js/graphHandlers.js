import {getBacklinksByContentId} from './serverApi.js'
import {mkNetworkData} from './dataHandlers.js'


export default (Graph) => {
  const handleClickNode = (lastNetworkData) => async (node)  => {
    console.log(node)
    const {id, isPerson} = node;
    if(!isPerson){
      return false
    }
    console.log(id, isPerson)
    const rows = await getBacklinksByContentId(id)
    lastNetworkData = mkNetworkData(rows, node.id, lastNetworkData);
    console.log(lastNetworkData)
    Graph.graphData(lastNetworkData)
  }
  
  return {handleClickNode}
}
