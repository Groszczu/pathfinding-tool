import React from 'react';
import Button from "../../shared/Button"
import { useDispatch } from 'react-redux';
import { clearNodes } from "./nodesSlice";

const ClearButton = () => {
  const dispatch = useDispatch();
  const clear = () => dispatch(clearNodes());
  return <Button primary={true} onClick={clear}>Clear</Button>
};

export default ClearButton;