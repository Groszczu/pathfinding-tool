import NodeTypes, { isChangeableType } from './NodeTypes';
import { setNodeType, setStartNode, setEndNode } from "./nodesSlice";

export function createEmptyNodes(cols, rows) {
  return Array(rows).fill(0).map((_, row) =>
    Array(cols).fill(0).map((_, col) => createNode(col, row)));
}

export function createNode(x, y, type = NodeTypes.empty) {
  return { x, y, type, visitedIndex: null };
}

export function areEqual(node1, node2) {
  if (!node1 || !node2) {
    return false;
  }
  return node1.x === node2.x && node1.y === node2.y;
}

export function neighbors(node1, node2) {
  const xDistance = Math.abs(node1.x - node2.x);
  const yDistance = Math.abs(node1.y - node2.y);
  return xDistance + yDistance === 1;
}

export function validateNodeTypeChange(node, startNode, endNode, newType) {
    return validateNodeChange(node, startNode, endNode) && isChangeableType(newType);

}
export function validateNodeChange(node, startNode, endNode) {
    return !areEqual(node, startNode) 
        && !areEqual(node, endNode);
}

export function getNodeChangeAction(x, y, type) {
  let action;
  switch (type) {
    case NodeTypes.empty:
    case NodeTypes.wall:
    case NodeTypes.visited:
    case NodeTypes.result:
      action = setNodeType({ x, y, type });
      break;
    case NodeTypes.start:
      action = setStartNode({ x, y });
      break;
    case NodeTypes.end:
      action = setEndNode({ x, y });
      break;
    default: break;
  }
  return action;
};