import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GridContainer from '../../shared/GridContainer';
import Node from './Node';
import useDrawToolsMouseEventHandlers from '../tools/useDrawToolsMouseEventHandlers';

const Nodes = () => {
    const columns = useSelector(({ nodes }) => nodes.columns);
    const rows = useSelector(({ nodes }) => nodes.rows);

    const animationFrameTime = useSelector(({ tools }) => tools.animationFrameTime);
    const fullscreen = useSelector(({ tools }) => tools.fullscreen);

    const dispatch = useDispatch();

    const {
        handleMouseDown,
        handleMouseUp,
        changeNodeType,
        changeNodeTypeIfPressed
    } = useDrawToolsMouseEventHandlers(dispatch);

    
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