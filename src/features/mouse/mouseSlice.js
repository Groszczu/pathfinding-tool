const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  mousePressed: false
};

const mouseSlice = createSlice({
  name: 'mouse',
  initialState,
  reducers: {
    mousePress: (state) => { state.mousePressed = true },
    mouseRelease: (state) => { state.mousePressed = false },
  }
});

const { reducer, actions } = mouseSlice;
export const { mousePress, mouseRelease } = actions;
export default reducer;