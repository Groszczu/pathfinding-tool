import React from 'react';
import Button from "../../shared/Button"
import { useDispatch } from 'react-redux';
import { resetNodes } from "./nodesSlice";

const ResetButton = () => {
  const dispatch = useDispatch();
  const reset = () => dispatch(resetNodes());
  return <Button primary={true} onClick={reset}>Reset</Button>
};

export default ResetButton;