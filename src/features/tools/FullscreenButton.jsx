import React from 'react';
import Button from '../../shared/Button';
import { toggleFullscreen } from '../tools/toolsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const FullscreenButton = () => {
    const dispatch = useDispatch();
    const fullscreen = useSelector(({ tools }) => tools.fullscreen);
    return (
        <Button onClick={dispatch.bind(null, toggleFullscreen())}
            style={{
                position: 'fixed',
                left: '.2em',
                bottom: '.2em'
            }}>{fullscreen ? '❌' : '🔼'}</Button>
    );
};

export default FullscreenButton;