import { scaleKeyframe, visitedNodeKeyframe } from "../../shared/Keyframes";
import { css } from "styled-components";

const NodeTypes = {
  empty: 'empty_node',
  wall: 'wall_node',
  visited: 'visited_node',
  result: 'result_node',
  start: 'start_node',
  end: 'end_node'
};

export const changeableTypes = new Set([
  NodeTypes.empty,
  NodeTypes.wall,
  NodeTypes.visited,
  NodeTypes.result
]);

export const toolTypes = new Set([
  NodeTypes.empty,
  NodeTypes.wall,
  NodeTypes.start,
  NodeTypes.end
]);

export function isChangeableType(type) {
  return changeableTypes.has(type);
};

export function isToolType(type) {
  return toolTypes.has(type);
} 

export const nodeTypeColor = {
  [NodeTypes.empty]: 'var(--empty-node-clr)',
  [NodeTypes.wall]: 'var(--wall-node-clr)',
  [NodeTypes.visited]: 'var(--visited-node-clr)',
  [NodeTypes.result]: 'var(--result-node-clr)',
  [NodeTypes.start]: 'var(--start-node-clr)',
  [NodeTypes.end]: 'var(--end-node-clr)',
}

export const nodeTypeStyle = {
  [NodeTypes.empty]: '',
  [NodeTypes.wall]: css`
    background: ${nodeTypeColor[NodeTypes.wall]};
    animation: ${scaleKeyframe} .2s linear;`,
  [NodeTypes.visited]: css`
    background: ${nodeTypeColor[NodeTypes.visited]};
    animation: ${visitedNodeKeyframe} .3s linear;`,
  [NodeTypes.result]: css`
    background: ${nodeTypeColor[NodeTypes.result]};
    animation: ${scaleKeyframe} .3s linear;
    transition: background-color .5s;`,
  [NodeTypes.start]: css`
    background: ${nodeTypeColor[NodeTypes.start]};
    box-shadow: 0px 0px 10px 5px rgba(9,135,0,1);
    z-index: 3`,
  [NodeTypes.end]: css`
    background: ${nodeTypeColor[NodeTypes.end]};
    box-shadow: 0px 0px 10px 5px rgba(252,3,3,1);
    z-index: 3`,
};


export default NodeTypes;