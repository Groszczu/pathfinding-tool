
const NodeTypes = {
  empty: 'empty_node',
  wall: 'wall_node',
  visited: 'visited_node',
  result: 'result_node',
  start: 'start_node',
  end: 'end_node'
};

export const changableTypes = [
  NodeTypes.empty,
  NodeTypes.wall,
  NodeTypes.visited,
  NodeTypes.result
];

export const toolTypes = [
  NodeTypes.empty,
  NodeTypes.wall,
  NodeTypes.start,
  NodeTypes.end
];

export function isChangableType(type) {
  return changableTypes.includes(type);
};

export function isToolType(type) {
  return toolTypes.includes(type);
} 

export const nodeTypeColor = {
  [NodeTypes.empty]: 'var(--empty-node-clr)',
  [NodeTypes.wall]: 'var(--background-clr)',
  [NodeTypes.visited]: 'var(--visited-node-clr)',
  [NodeTypes.result]: 'var(--result-node-clr)',
  [NodeTypes.start]: 'var(--start-node-clr)',
  [NodeTypes.end]: 'var(--end-node-clr)',
}

export const nodeTypeStyle = {
  [NodeTypes.empty]: '',
  [NodeTypes.wall]: `background: ${nodeTypeColor[NodeTypes.wall]};`,
  [NodeTypes.visited]: `background: ${nodeTypeColor[NodeTypes.visited]};`,
  [NodeTypes.result]: `background: ${nodeTypeColor[NodeTypes.result]};`,
  [NodeTypes.start]: `background: ${nodeTypeColor[NodeTypes.start]}; box-shadow: 0px 0px 10px 5px rgba(9,135,0,1);`,
  [NodeTypes.end]: `background: ${nodeTypeColor[NodeTypes.end]}; box-shadow: 0px 0px 10px 5px rgba(252,3,3,1);`,
};


export default NodeTypes;