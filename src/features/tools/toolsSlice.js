import { createSlice } from '@reduxjs/toolkit';
import NodeTypes from '../nodes/NodeTypes';

const initialState = {
  toolType: NodeTypes.wall,
  fullscreen: false
};

const toolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    toggleFullscreen: (state) => { state.fullscreen = !state.fullscreen }
  }
});

const { reducer, actions } = toolsSlice;
export const { toggleFullscreen } = actions;
export default reducer;