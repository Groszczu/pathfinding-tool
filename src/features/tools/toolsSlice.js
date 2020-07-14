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
      const { type } = payload;
      if (isToolType(payload.type)) {
        state.toolType = type;
      }
    },
    toggleFullscreen: (state) => { state.fullscreen = !state.fullscreen }
  }
});

const { reducer, actions } = toolsSlice;
export const { setToolType, toggleFullscreen } = actions;
export default reducer;