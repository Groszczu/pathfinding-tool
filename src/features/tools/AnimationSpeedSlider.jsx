import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeAnimationFrameTime } from './toolsSlice';
import { pathfindingState } from '../nodes/nodesSlice';
import Slider from '../../shared/Slider';
import Label from '../../shared/Label';
import InlineFlex from '../../shared/InlineFlex';

const AnimationSpeedSlider = () => {
    const animationFrameTime = useSelector(({ tools }) => tools.animationFrameTime);
    const state = useSelector(({ nodes }) => nodes.pathfinding);
    const dispatch = useDispatch();

    const timeoutRef = useRef(null);
    const inputRef = useRef(null);

    const handleChange = () => {
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            dispatch(changeAnimationFrameTime(inputRef.current.value))
        }, 500);
    }

    return (
        <InlineFlex direction='column'>
            <Label>Animation: {inputRef.current?.value || animationFrameTime}ms</Label>
            <Slider
                ref={inputRef}
                disabled={state !== pathfindingState.ready}
                defaultValue={animationFrameTime}
                width={'70%'}
                min={0}
                max={250}
                step={10}
                onChange={handleChange}
            />
        </InlineFlex>
    );
};

export default AnimationSpeedSlider;