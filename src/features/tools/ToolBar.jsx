import React from 'react';
import { toolTypes, nodeTypeColor } from '../nodes/NodeTypes';
import { changeSelectedTool } from '../nodes/nodesSlice';
import Button from '../../shared/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import FullscreenFlexContainer from '../../shared/FullscreenFlexContainer';

const ToolBar = () => {
    const dispatch = useDispatch();
    const selected = useSelector(({ nodes }) => nodes.selectedDrawTool);
    const fullscreen = useSelector(({ tools }) => tools.fullscreen);

    const boundSetToolType = (toolType) => dispatch(changeSelectedTool(toolType));

    return (
        <FullscreenFlexContainer fullscreen={fullscreen} top={0} right={'-1px'}>
            {Array.from(toolTypes).map(type => <Button
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