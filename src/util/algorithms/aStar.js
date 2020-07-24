import NodeTypes from "../../features/nodes/NodeTypes";
import { aStartHeuristic } from "./heuristics";

export function basicAStar(nodes, startNode, endNode, heuristic) {

  const visited = [];
  const flatNodes = nodes.flat().filter(node => node.type !== NodeTypes.wall);

  let unvisited = heuristic.addHeuristics(flatNodes, startNode, endNode);

  for (let i = 0; unvisited.length !== 0; i++) {
    unvisited.sort(heuristic.comparer);
    const currentNode = unvisited[0];

    // if lowest distance from start node in unvisited array equals Infinity
    // it means there is no path from start to end, so we can end searching
    if (heuristic.endCondition(currentNode)) {
      return { visited, result: null };
    }

    unvisited.shift(); //remove current node
    unvisited = unvisited.map(node =>
      heuristic.map(currentNode, node)
    );

    visited.push({ ...currentNode, visitedIndex: i });
    if (currentNode.type === NodeTypes.end) {
      break;
    }
  }

  const result = [];
  const endNodeData = visited.find(n => n.type === NodeTypes.end);
  for (let i = 0, node = endNodeData.previousNode; node?.type !== NodeTypes.start; node = node.previousNode, i++) {
    if (!node) {
      return { visited, result };
    }
    result.push({ ...node, visitedIndex: i });
  }

  return { visited, result };
}

export default function aStar(nodes, startNode, endNode) {
  return basicAStar(nodes, startNode, endNode, aStartHeuristic);
}