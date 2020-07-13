import { createSlice } from '@reduxjs/toolkit';
import NodeTypes from "./NodeTypes";
import { createEmptyNodes, areEqual } from './nodeHelpers';


// Default state
const COLS = 40;
const ROWS = 30;

function initNodesState(cols, rows) {
    const nodes = createEmptyNodes(cols, rows);
    const middleNodeY = Math.floor(nodes.length / 2);
    const middleNodeX = Math.floor(nodes[0].length / 2);

    return {
        columns: cols,
        rows,
        nodes,
        startNode: { x: middleNodeX, y: middleNodeY },
        endNode: { x: middleNodeX, y: 10 }
    };
}

const defaultState = initNodesState(COLS, ROWS);

const nodesSlice = createSlice({
    name: 'nodes',
    initialState: defaultState,
    reducers: {
        setNodeType: (state, { payload }) => {
            const { x, y, type } = payload;
            const { startNode, endNode } = state;
            if (!areEqual({ x, y }, startNode) && !areEqual({ x, y }, endNode)) {
                state.nodes[y][x].type = type;
            }
        },
        setNodesType: (state, { payload }) => {
            const { nodes, type } = payload;
            const { startNode, endNode } = state;
            for (const node of nodes) {
                if (!areEqual(node, startNode) && !areEqual(node, endNode)) {
                    state.nodes[node.y][node.x].type = type;
                }
            }
        },
        setVisited: (state, { payload }) => {
            const { nodes } = payload;
            const { startNode, endNode } = state;
            for (const node of nodes) {
                if (!areEqual(node, startNode) && !areEqual(node, endNode)) {
                    const stateNode = state.nodes[node.y][node.x];
                    stateNode.visitedIndex = node.visitedIndex;
                    stateNode.type = NodeTypes.visited;
                }
            }
        },
        setStartNode: (state, { payload }) => {
            const { x, y } = payload;
            if (state.nodes[y][x].type === NodeTypes.empty) {
                state.startNode = { x, y };
            }
        },
        setEndNode: (state, { payload }) => {
            const { x, y } = payload;
            if (state.nodes[y][x].type === NodeTypes.empty) {
                state.endNode = { x, y };
            }
        },
        resetNodes: () => defaultState
    }
});

const { actions, reducer } = nodesSlice;
export const { setNodeType, setNodesType, setStartNode, setEndNode, resetNodes, setVisited } = actions;
export default reducer;