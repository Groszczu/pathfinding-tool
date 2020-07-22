import React from 'react';
import Button from '../../shared/Button';
import { toggleFullscreen } from '../tools/toolsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const FullscreenButton = () => {
    const dispatch = useDispatch();
    const fullscreen = useSelector(({ tools }) => tools.fullscreen);

    const boundToggleFullscreen = () => { 
        !fullscreen
            ? document.querySelector('body').requestFullscreen()
            : document.fullscreen && document.exitFullscreen();
        dispatch(toggleFullscreen());
    }

    return (
        <Button onClick={boundToggleFullscreen}
            style={{
                position: 'fixed',
                maxWidth: 'none',
                left: 0,
                bottom: 0,
                zIndex: '2'
            }}>{fullscreen ? '❌' : '🔼'}</Button>
    );
};

export default FullscreenButton;