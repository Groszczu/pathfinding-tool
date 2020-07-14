import { neightbours } from "../../features/nodes/nodeHelpers";
import NodeTypes from "../../features/nodes/NodeTypes";

export default function dijkstra(nodes) {

  const visited = [];
  let unvisited = nodes
    .flat()
    .filter(node => node.type !== NodeTypes.wall)
    .map(node => ({
    ...node,
    distance: node.type === NodeTypes.start ? 0 : Infinity,
    previousNode: null
  }));

  let i = 0;
  for (; unvisited.length !== 0; i++) {
    unvisited.sort((a, b) => a.distance - b.distance);
    const currentNode = unvisited[0];
    
    // if lowest distance from start node in unvisited array equals Infinity
    // it means there is no path from start to end, so we can end searching
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
    if (currentNode.type === NodeTypes.end) {
      break;
    }
  }

  const result = [];
  const endNodeData = visited.find(n => n.type === NodeTypes.end);
  for (let node = endNodeData.previousNode; node.type !== NodeTypes.start; node = node.previousNode ) {
    result.push(node);
  }

  return { visited, result, moves: i };
}