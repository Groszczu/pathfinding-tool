import { createSlice } from '@reduxjs/toolkit';
import algorithmId from '../../util/algorithms/algorithmId';
import NodeTypes, { isToolType } from '../nodes/NodeTypes';

const initialState = {
  fullscreen: false,
  animationFrameTime: 20,
  pathfindingAlgorithm: algorithmId.dijkstra,
  drawTool: NodeTypes.wall
};

const toolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    enterFullscreen: (state) => { state.fullscreen = true },
    exitFullscreen: (state) => { state.fullscreen = false },
    setAnimationFrameTime: (state, { payload }) => { state.animationFrameTime = payload; },
    setPathfindingAlgorithm: (state, { payload }) => { state.pathfindingAlgorithm = payload; },
    setDrawTool: (state, { payload }) => {
      const toolType = payload;
      if (!isToolType(toolType)) {
        return;
      }
      state.drawTool = toolType;
    },
  }
});

const { reducer, actions } = toolsSlice;
export const {
  enterFullscreen,
  exitFullscreen,
  setAnimationFrameTime,
  setPathfindingAlgorithm,
  setDrawTool,
} = actions;
export default reducer;