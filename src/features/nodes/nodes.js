import produce from "immer";


// Action 
const CLICK_NODE = 'path-finding/nodes/CLICK_NODE';
const RESET_NODES = 'path-finding/nodes/RESET_NODES';

// Default state
const COLS = 50;
const ROWS = 30;

function createEmptyNode(x, y) {
    return { wall: false, x, y };
}

function createEmptyNodes(cols, rows) {
    return Array(rows).fill(0).map((_, row) =>
        Array(cols).fill(0).map((_, col) => createEmptyNode(col, row)));
}

const nodes = createEmptyNodes(COLS, ROWS);
const startNodeX = Math.floor(nodes.length / 2);
const startNodeY = Math.floor(nodes[0].length / 2);

const defaultState = {
  nodes,
  startNode: nodes[startNodeY][startNodeX],
  endNode: null
};

// Reducer
export default function reducer (state = defaultState, action) {
    switch (action.type) {
        case CLICK_NODE:
            return produce(state, draftState => {
                draftState.nodes[action.payload.y][action.payload.x].wall = true
            })
        case RESET_NODES:
            return defaultState;
        default: 
            return state;
    }
}

// Action creators
export function clickNode(node) {
    return { type: CLICK_NODE, payload: node };
}

export function resetNodes() {
    return { type: RESET_NODES };
}