import { createSlice } from '@reduxjs/toolkit';
import NodeTypes, { isToolType } from "./NodeTypes";
import { createEmptyNodes, validateNodeChange, validateNodeTypeChange, createNode } from './nodeHelpers';


// Default state
const COLS = 40;
const ROWS = 30;

function initNodesState(cols, rows) {
    const nodes = createEmptyNodes(cols, rows);
    const middleNodeY = Math.floor(nodes.length / 2);
    const middleNodeX = Math.floor(nodes[0].length / 2);

    const startNode = nodes[middleNodeY][middleNodeX];
    const endNode = nodes[Math.floor(middleNodeY / 2)][middleNodeX];
    startNode.type = NodeTypes.start;
    endNode.type = NodeTypes.end;

    return {
        columns: cols,
        rows,
        nodes,
        startNode,
        endNode
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
            if (validateNodeTypeChange(payload, startNode, endNode, type)) {
                const stateNode = state.nodes[y][x];
                stateNode.type = type;
                stateNode.visitedIndex = null;
            }
        },
        setNodesType: (state, { payload }) => {
            const { nodes, type } = payload;
            const { startNode, endNode } = state;
            for (const node of nodes) {
                if (validateNodeTypeChange(node, startNode, endNode, type)) {
                    const stateNode = state.nodes[node.y][node.x];
                    stateNode.type = type;
                    stateNode.visitedIndex = null;
                }
            }
        },
        setVisited: (state, { payload }) => {
            const { nodes } = payload;
            const { startNode, endNode } = state;
            for (const node of nodes) {
                if (validateNodeChange(node, startNode, endNode)) {
                    const stateNode = state.nodes[node.y][node.x];
                    stateNode.visitedIndex = node.visitedIndex;
                    stateNode.type = NodeTypes.visited;
                }
            }
        },
        setStartNode: (state, { payload }) => {
            const { x, y } = payload;
            const { startNode: oldStartNode, endNode } = state;
            if (validateNodeChange(payload, oldStartNode, endNode)) {
                state.nodes[oldStartNode.y][oldStartNode.x] = createNode(oldStartNode.x, oldStartNode.y);

                const newStartNode = createNode(x, y, NodeTypes.start);
                state.startNode = newStartNode;
                state.nodes[y][x] = newStartNode;
            }
        },
        setEndNode: (state, { payload }) => {
            const { x, y } = payload;
            const { startNode, endNode: oldEndNode } = state;
            if (validateNodeChange(payload, startNode, oldEndNode)) {
                state.nodes[oldEndNode.y][oldEndNode.x] = createNode(oldEndNode.x, oldEndNode.y);

                const newEndNode = createNode(x, y, NodeTypes.end);
                state.endNode = newEndNode;
                state.nodes[y][x] = newEndNode;
            }
        },
        clearNodes: ({ nodes }) => {
            nodes.forEach(row => row.forEach(node => {
                if (!isToolType(node.type))
                    node.type = NodeTypes.empty;
                node.visitedIndex = null;
            }))
        },
        resetNodes: () => defaultState
    }
});

const { actions, reducer } = nodesSlice;
export const { setNodeType, setNodesType, setStartNode, setEndNode, clearNodes, resetNodes, setVisited } = actions;
export default reducer;