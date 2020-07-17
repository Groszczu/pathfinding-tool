import { configureStore } from '@reduxjs/toolkit';
import nodesReducer from '../features/nodes/nodesSlice';
import toolsReducer from '../features/tools/toolsSlice';

const reducer = {
  nodes: nodesReducer,
  tools: toolsReducer
};

const customizedMiddleware = [];

export default configureStore({
  reducer,
  middleware: customizedMiddleware 
});
