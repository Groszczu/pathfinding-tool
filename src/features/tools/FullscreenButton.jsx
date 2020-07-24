import React from 'react';
import Button from '../../shared/Button';
import { enterFullscreen, exitFullscreen } from '../tools/toolsSlice';
import { useDispatch, useSelector } from 'react-redux';

const enterFullscreenThunk = async (dispatch) => {
  await document.getElementById('root').requestFullscreen();
  dispatch(enterFullscreen());
};

const exitFullscreenThunk = async (dispatch) => {
  document.fullscreen && (await document.exitFullscreen());
  dispatch(exitFullscreen());
};

const FullscreenButton = () => {
  const dispatch = useDispatch();
  const fullscreen = useSelector(({ tools }) => tools.fullscreen);

  const boundEnterFullscreen = () => {
    dispatch(enterFullscreenThunk);
  };

  const boundExitFullscreen = () => {
    dispatch(exitFullscreenThunk);
  };

  return (
    <Button
      onClick={fullscreen ? boundExitFullscreen : boundEnterFullscreen}
      style={{
        position: 'fixed',
        maxWidth: 'none',
        left: 0,
        bottom: 0,
        zIndex: '2',
      }}
    >
      {fullscreen ? '❌' : '🔼'}
    </Button>
  );
};

export default FullscreenButton;
