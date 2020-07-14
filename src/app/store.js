import { configureStore } from '@reduxjs/toolkit';
import nodesReducer from '../features/nodes/nodesSlice';
import mouseReducer from '../features/mouse/mouseSlice';
import toolsReducer from '../features/tools/toolsSlice';

const reducer = {
  nodes: nodesReducer,
  mouse: mouseReducer,
  tools: toolsReducer
};

export default configureStore({
  reducer,
  middleware: [] 
});
