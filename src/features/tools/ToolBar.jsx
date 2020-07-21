import React from 'react';
import { toolTypes, nodeTypeColor } from '../nodes/NodeTypes';
import { changeSelectedTool } from '../nodes/nodesSlice';
import Button from '../../shared/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import FullscreenFlexContainer from '../../shared/FullscreenFlexContainer';
import AnimationSpeedSlider from './AnimationSpeedSlider';
import { useState } from 'react';
import AlgorithmPicker from './AlgorithmPicker';

const ToolBar = () => {
    const dispatch = useDispatch();
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);
    const selected = useSelector(({ nodes }) => nodes.selectedDrawTool);
    const fullscreen = useSelector(({ tools }) => tools.fullscreen);

    const boundSetToolType = (toolType) => dispatch(changeSelectedTool(toolType));

    return (
        <FullscreenFlexContainer
            fullscreen={fullscreen}
            top={0} right={0}
            onMouseEnter={fullscreen ? () => setHovered(true) : null}
            onMouseLeave={fullscreen ? () => setHovered(false) : null}
            onFocus={fullscreen ? () => setFocused(true) : null}
            onBlur={fullscreen ? () => setFocused(false) : null}
        >
            {!fullscreen || hovered || focused
                ? <>
                    {Array.from(toolTypes).map(type => <Button
                        key={type}
                        onClick={() => boundSetToolType(type)}
                        selected={type === selected}
                        style={{
                            backgroundColor: nodeTypeColor[type],
                            maxWidth: '.75em',
                            margin: '.2em .4em',
                        }} />)}
                    <AnimationSpeedSlider />
                    <AlgorithmPicker />
                </>
                : <Button
                        selected={true}
                        style={{
                            backgroundColor: nodeTypeColor[selected],
                            maxWidth: '.75em',
                            margin: '.2em .4em',
                        }}
                    />
            }
        </FullscreenFlexContainer>
    );
}

export default ToolBar;