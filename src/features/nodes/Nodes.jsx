import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GridContainer from '../../shared/GridContainer';
import Node from './Node';
import { draw } from './nodesSlice';

const Nodes = ({ animationFrameDuration }) => {
    const mousePressed = useRef(false);
    const columns = useSelector(({ nodes }) => nodes.columns);
    const rows = useSelector(({ nodes }) => nodes.rows);
    const fullscreen = useSelector(({ tools }) => tools.fullscreen);

    const dispatch = useDispatch();

    const changeNodeTypeIfPressed = (node) => {
        if (!mousePressed.current) return;
        changeNodeType(node);
    };
    const changeNodeType = (node) =>
        dispatch(draw({ nodes: [node] }));

    const rowsIndices = [...Array(rows).keys()];
    const columnsIndices = [...Array(columns).keys()];
    return (
        <GridContainer fullscreen={fullscreen} columns={columns} rows={rows}
            onMouseDown={() => mousePressed.current = true}
            onMouseUp={() => mousePressed.current = false}>
            {
                rowsIndices.map(y =>
                    columnsIndices.map(x =>
                        (<Node
                            key={`${x}_${y}`}
                            x={x}
                            y={y}
                            animationFrameDuration={animationFrameDuration}
                            onMouseDown={changeNodeType.bind(null, { x, y })}
                            onMouseOver={changeNodeTypeIfPressed.bind(null, { x, y })} />)
                    )
                )
            }
        </GridContainer>
    );
};

export default Nodes;