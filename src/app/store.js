import { configureStore } from '@reduxjs/toolkit';
import nodesReducer from '../features/nodes/nodes';

const reducer = {
  nodes: nodesReducer
};

export default configureStore({
  reducer,
  middleware: [] 
});
