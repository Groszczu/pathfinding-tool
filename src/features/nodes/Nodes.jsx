import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GridContainer from '../../shared/GridContainer';
import Node from './Node';
import { draw, changeSelectedTool } from './nodesSlice';
import NodeTypes from './NodeTypes';

const Nodes = () => {
    const mousePressed = useRef(false);
    const dragging = useRef(false);

    const columns = useSelector(({ nodes }) => nodes.columns);
    const rows = useSelector(({ nodes }) => nodes.rows);

    const animationFrameTime = useSelector(({ tools }) => tools.animationFrameTime);
    const fullscreen = useSelector(({ tools }) => tools.fullscreen);

    const dispatch = useDispatch();

    const changeNodeTypeIfPressed = (node) => {
        if (!mousePressed.current) return;
        changeNodeType(node);
    };
    const changeNodeType = (node) => {
        if (node.type === NodeTypes.start || node.type === NodeTypes.end) {
            dispatch(changeSelectedTool(node.type));
            dragging.current = true;
        }
        dispatch(draw({ nodes: [node] }));
    }

    const handleMouseDown = (e) => {
        // right click
        if (e.button === 2) {
            dispatch(changeSelectedTool(NodeTypes.empty));
        }
        mousePressed.current = true;
    };
    const handleMouseUp = (e) => {
        mousePressed.current = false;
        switch (e.button) {
            case 0: //left click
                // if left click is released
                // and it was dragging start/end note
                // set draw tool to previous one
                dragging.current && dispatch(changeSelectedTool(NodeTypes.wall));
                dragging.current = false;
                break;
            case 2: //right click
                // if right click is released set draw tool to wall type
                dispatch(changeSelectedTool(NodeTypes.wall));
                break
            default: break;
        }
    }
    const rowsIndices = [...Array(rows).keys()];
    const columnsIndices = [...Array(columns).keys()];
    return (
        <GridContainer fullscreen={fullscreen} columns={columns} rows={rows}
            onMouseDownCapture={handleMouseDown}
            onMouseUp={handleMouseUp}
            onContextMenu={(e) => e.preventDefault()}
        >
            {
                rowsIndices.map(y =>
                    columnsIndices.map(x =>
                        <Node
                            key={`${x}_${y}`}
                            x={x}
                            y={y}
                            animationFrameTime={animationFrameTime}
                            onMouseDown={changeNodeType}
                            onMouseOver={changeNodeTypeIfPressed}
                        />
                    )
                )
            }
        </GridContainer>
    );
};

export default Nodes;