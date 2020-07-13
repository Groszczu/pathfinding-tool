import NodeTypes from './NodeTypes';

export function createEmptyNodes(cols, rows) {
  return Array(rows).fill(0).map((_, row) =>
    Array(cols).fill(0).map((_, col) => createEmptyNode(col, row)));
}

export function createEmptyNode(x, y) {
  return { x, y, type: NodeTypes.empty, visitedIndex: null };
}

export function areEqual(node1, node2) {
  if (!node1 || !node2) {
    return false;
  }
  return node1.x === node2.x && node1.y === node2.y;
}

export function neightbours(node1, node2) {
  const xDistance = Math.abs(node1.x - node2.x);
  const yDistance = Math.abs(node1.y - node2.y);
  return xDistance + yDistance === 1;
}