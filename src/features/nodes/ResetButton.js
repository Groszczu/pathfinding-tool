import React, { useCallback } from 'react';
import Button from "../../shared/Button"
import { useDispatch } from 'react-redux';
import { resetNodes } from "./nodes";

const ResetButton = () => {
  const dispatch = useDispatch();
  const reset = useCallback(() => dispatch(resetNodes()), [dispatch]);
  return <Button primary={true} onClick={reset}>Reset</Button>
};

export default ResetButton;