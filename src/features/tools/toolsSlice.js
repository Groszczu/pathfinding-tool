import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullscreen: false,
  animationFrameTime: 20
};

const toolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    toggleFullscreen: (state) => { state.fullscreen = !state.fullscreen },
    changeAnimationFrameTime: (state, { payload }) => { state.animationFrameTime = payload }
  }
});

const { reducer, actions } = toolsSlice;
export const { toggleFullscreen, changeAnimationFrameTime } = actions;
export default reducer;