import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeAnimationFrameTime } from './toolsSlice';
import { pathfindingState } from '../nodes/nodesSlice';
import Slider from '../../shared/Slider';
import styled from 'styled-components';

const InlineFlex = styled.span`
    display: inline-flex;
    flex-direction: ${props => props.direction};
    justify-content: center;
`;

const AnimationSpeedSlider = ({ vertical }) => {
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
        <InlineFlex direction={vertical ? 'row' : 'column'}>
            <p style={{writingMode: vertical && 'vertical-rl', textOrientation: 'sideways'}}>Animation: {inputRef.current?.value || animationFrameTime}ms</p>
            <Slider
                ref={inputRef}
                vertical={vertical}
                disabled={state !== pathfindingState.ready}
                defaultValue={animationFrameTime}
                min={0}
                max={250}
                step={10}
                onChange={handleChange}
            />
        </InlineFlex>
    );
};

export default AnimationSpeedSlider;