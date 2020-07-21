import { createSlice } from '@reduxjs/toolkit';
import algorithmId from '../../util/algorithms/algorithmId';

const initialState = {
  fullscreen: false,
  animationFrameTime: 20,
  pathfindingAlgorithm: algorithmId.dijkstra
};

const toolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    toggleFullscreen: (state) => { state.fullscreen = !state.fullscreen; },
    changeAnimationFrameTime: (state, { payload }) => { state.animationFrameTime = payload; },
    changePathfindingAlgorithm: (state, { payload }) => { state.pathfindingAlgorithm = payload; }
  }
});

const { reducer, actions } = toolsSlice;
export const { toggleFullscreen, changeAnimationFrameTime, changePathfindingAlgorithm } = actions;
export default reducer;