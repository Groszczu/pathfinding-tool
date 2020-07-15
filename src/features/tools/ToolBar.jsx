import React from 'react';
import { toolTypes, nodeTypeColor } from '../nodes/NodeTypes';
import { setToolType } from './toolsSlice';
import Button from '../../shared/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ToolBar = () => {
    const dispatch = useDispatch();
    const selected = useSelector(({ tools }) => tools.toolType);

    const boundSetToolType = (toolType) => dispatch(setToolType(toolType));

    return (
        <div>
            {toolTypes.map(type => <Button
                key={type}
                onClick={() => boundSetToolType(type)}
                selected={type === selected}
                style={{
                    backgroundColor: nodeTypeColor[type],
                    margin: '.4em'
                }} />)}
        </div>
    );
}

export default ToolBar;