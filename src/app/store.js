import { configureStore } from '@reduxjs/toolkit';
import nodesReducer from '../features/nodes/nodesSlice';
import toolsReducer from '../features/tools/toolsSlice';

const reducer = {
  nodes: nodesReducer,
  tools: toolsReducer,
};

export default configureStore({
  reducer,
});
