import NodeTypes, { isChangeableType, isToolType } from './NodeTypes';

export function createEmptyNodes(cols, rows) {
  return Array(rows)
    .fill(0)
    .map((_, row) =>
      Array(cols)
        .fill(0)
        .map((_, col) => createNode(col, row))
    );
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

export function validateNodeTypeChange(node, newType) {
  return validateNodeChange(node) && isChangeableType(newType);
}
export function validateNodeChange(node) {
  return !node.type === NodeTypes.start && !node.type === NodeTypes.end;
}

export function isStartOrEndNode(node, startNode, endNode) {
  return areEqual(node, startNode) || areEqual(node, endNode);
}

export function distance(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

export function clearNotToolNodes(nodes) {
  return nodes.map((row) =>
    row.map((node) => {
      if (!isToolType(node.type)) {
        return createNode(node.x, node.y, NodeTypes.empty);
      }
      return node;
    })
  );
}
