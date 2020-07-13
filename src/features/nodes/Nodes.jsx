import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GridContainer from '../../shared/GridContainer';
import Node from './Node';
import { setNodeType, setNodesType, setVisited } from './nodes';
import { useCallback } from 'react';
import NodeTypes from './NodeTypes';
import { areEqual } from './nodeHelpers';
import Dijkstra from '../../util/alghorithms/dijkstra';
import Button from '../../shared/Button';

const Nodes = ({ animationFrameDuration }) => {
    const [mousePressed, setMousePressed] = useState(false);

    const nodes = useSelector(({ nodes }) => nodes.nodes);
    const gridColumns = useSelector(({ nodes }) => nodes.columns);
    const startNode = useSelector(({ nodes }) => nodes.startNode);
    const endNode = useSelector(({ nodes }) => nodes.endNode);
    const dispatch = useDispatch();
    const setNodeToWall = useCallback((node) =>
        dispatch(setNodeType({ x: node.x, y: node.y, type: NodeTypes.wall })),
        [dispatch]);

    const setNodeToWallIfPressed = useCallback((node) => {
        if (!mousePressed) return false;
        setNodeToWall(node);
        return true;
    }, [mousePressed, setNodeToWall]);

    const startPathfinding = useCallback(() => {
        const { visited, result, moves } = Dijkstra(startNode, endNode, nodes);
        visited && dispatch(setVisited({ nodes: visited }));
        result &&
            setTimeout(() =>
                dispatch(setNodesType({
                    nodes: result,
                    type: NodeTypes.result
                })
                )
                , animationFrameDuration * moves);
    }, [dispatch, animationFrameDuration, startNode, endNode, nodes]);

    return (
        <>
            <GridContainer columns={gridColumns} onMouseDown={() => setMousePressed(true)} onMouseUp={() => setMousePressed(false)}>
                {nodes.flat().map(node =>
                    <Node
                        animationFrameDuration={animationFrameDuration}
                        key={`${node.x}_${node.y}`}
                        node={node}
                        startNode={areEqual(node, startNode)}
                        endNode={areEqual(node, endNode)}
                        onMouseDown={setNodeToWall.bind(null, node)}
                        onMouseOver={setNodeToWallIfPressed.bind(null, node)} />)}
            </GridContainer>
            <Button onClick={startPathfinding}>Start</Button>
        </>
    );
};

export default Nodes;