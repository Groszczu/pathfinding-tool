import { createSlice } from '@reduxjs/toolkit';
import NodeTypes, { isToolType } from '../nodes/NodeTypes';

const initialState = {
  toolType: NodeTypes.wall,
  fullscreen: false
};

const toolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    setToolType: (state, { payload }) => {
      if (isToolType(payload)) {
        state.toolType = payload;
      }
    },
    toggleFullscreen: (state) => { state.fullscreen = !state.fullscreen }
  }
});

const { reducer, actions } = toolsSlice;
export const { setToolType, toggleFullscreen } = actions;
export default reducer;