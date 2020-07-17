import React from 'react';
import { toolTypes, nodeTypeColor } from '../nodes/NodeTypes';
import { setToolType } from './toolsSlice';
import Button from '../../shared/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import FullscreenFlexContainer from '../../shared/FullscreenFlexContainer';

const ToolBar = () => {
    const dispatch = useDispatch();
    const selected = useSelector(({ tools }) => tools.toolType);
    const fullscreen = useSelector(({ tools }) => tools.fullscreen);

    const boundSetToolType = (toolType) => dispatch(setToolType(toolType));

    return (
        <FullscreenFlexContainer fullscreen={fullscreen} top={0} right={'-1px'}>
            {toolTypes.map(type => <Button
                key={type}
                onClick={() => boundSetToolType(type)}
                selected={type === selected}
                style={{
                    backgroundColor: nodeTypeColor[type],
                    maxWidth: '.75em',
                    margin: '.2em .4em',
                }} />)}
        </FullscreenFlexContainer>
    );
}

export default ToolBar;