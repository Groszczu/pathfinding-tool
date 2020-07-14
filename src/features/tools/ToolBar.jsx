import React from 'react';
import { toolTypes, nodeTypeColor } from '../nodes/NodeTypes';
import { setToolType } from './toolsSlice';
import Button from '../../shared/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ToolBar = () => {
    const dispatch = useDispatch();
    const selected = useSelector(({ tools }) => tools.toolType);
    return (
        <div>
            {toolTypes.map(type => <Button
                key={type}
                onClick={dispatch.bind(null, setToolType({ type }))}
                style={{
                    backgroundColor: nodeTypeColor[type],
                    transform: type === selected ? 'scale(1.2, 1.2)' : null,
                    margin: '.4em'
                }} />)}
        </div>
    );
}

export default ToolBar;