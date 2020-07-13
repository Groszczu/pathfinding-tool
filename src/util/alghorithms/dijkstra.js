import { areEqual, neightbours } from "../../features/nodes/nodeHelpers";
import NodeTypes from "../../features/nodes/NodeTypes";

export default function dijkstra(startNode, endNode, nodes) {

  const visited = [];
  const distanceFromStart = nodes
    .flat()
    .filter(node => node.type !== NodeTypes.wall)
    .map(node => ({
    ...node,
    distance: areEqual(node, startNode) ? 0 : Infinity,
    previousNode: null
  }));
  let unvisited = [...distanceFromStart];

  let i = 0;
  for (; unvisited.length !== 0; i++) {
    unvisited.sort((a, b) => a.distance - b.distance);
    const currentNode = unvisited[0];
    
    if (currentNode.distance === Infinity) {
      return { visited, result: null, moves: i };
    }

    unvisited.shift(); //remove current node
    unvisited = unvisited.map(node => {
      return neightbours(currentNode, node) ?
        {
          ...node,
          distance: Math.min(node.distance, currentNode.distance + 1), 
          previousNode: node.distance > currentNode.distance + 1 ? currentNode : node.previousNode
        }
        :
        node;
    });
    visited.push({ ...currentNode, visitedIndex: i });
    if (areEqual(currentNode, endNode)) {
      break;
    }
  }

  const result = [];
  const endNodeData = visited.find(n => areEqual(n, endNode));
  for (let node = endNodeData.previousNode; !areEqual(node, startNode); node = node.previousNode ) {
    result.push(node);
  }

  return { visited, result, moves: i };
}