import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GridContainer from '../../shared/GridContainer';
import Node from './Node';
import { clickNode } from './nodes';
import { useCallback } from 'react';

const Nodes = () => {
    const [mousePressed, setMousePressed] = useState(false);
    const nodes = useSelector(state => state.nodes);
    const dispatch = useDispatch();
    const nodeChange = useCallback((node) => {
        if (!mousePressed) return;
        dispatch(clickNode(node));
    }, [dispatch, mousePressed])

    return (
        <GridContainer onMouseDown={() => setMousePressed(true)} onMouseUp={() => setMousePressed(false)}>
            {nodes.nodes.flat().map(node =>
                <Node
                    key={`${node.x}_${node.y}`}
                    node={node}
                    onMouseHold={nodeChange.bind(null, node)} />)}
        </GridContainer>
    );
};

export default Nodes;