import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GridContainer from '../../shared/GridContainer';
import Node from './Node';
import { setNodesType, setVisited, clearNodes, resetNodes } from './nodesSlice';
import { mousePress, mouseRelease } from '../mouse/mouseSlice';
import NodeTypes from './NodeTypes';
import dijkstra from '../../util/algorithms/dijkstra';
import Button from '../../shared/Button';
import useNodesSlice from './useNodesSlice';
import { getNodeChangeAction } from './nodeHelpers';

const Nodes = ({ animationFrameDuration }) => {

    const mousePressed = useSelector(({ mouse }) => mouse.mousePressed);
    const {
        nodes,
        columns,
        rows,
        canStartPathfinding
    } = useNodesSlice();
    const selectedTool = useSelector(({ tools }) => tools.toolType);
    const fullscreen = useSelector(({ tools }) => tools.fullscreen);

    const dispatch = useDispatch();

    const changeNodeTypeIfPressed = (node, type) => {
        if (!mousePressed) return false;
        changeNodeType(node, type);
        return true;
    };
    const changeNodeType = (node, type) =>
        dispatch(getNodeChangeAction(node.x, node.y, type));

    const startPathfinding = () => {
        const { visited, result, moves } = dijkstra(nodes);
        visited && dispatch(setVisited({ nodes: visited }));
        result &&
            setTimeout(() =>
                dispatch(setNodesType({
                    nodes: result,
                    type: NodeTypes.result,
                    withIndex: true
                })
                )
                , animationFrameDuration * moves);
    };

    const boundClearNodes = () => dispatch(clearNodes());
    const boundResetNode = () => dispatch(resetNodes());

    return (
        <>
            <GridContainer fullscreen={fullscreen} columns={columns} rows={rows} onMouseDown={dispatch.bind(null, mousePress())} onMouseUp={dispatch.bind(null, mouseRelease())}>
                {
                    nodes.flat().map(node =>
                        <Node
                            key={`${node.x}_${node.y}`}
                            animationFrameDuration={animationFrameDuration}
                            node={node}
                            onMouseDown={changeNodeType.bind(null, node, selectedTool)}
                            onMouseOver={changeNodeTypeIfPressed.bind(null, node, selectedTool)} />)
                }
            </GridContainer>
            {
                canStartPathfinding
                    ? <Button onClick={startPathfinding}>Start</Button>
                    : <Button onClick={boundClearNodes} primary={true}>Clear</Button>
            }
            <Button onClick={boundResetNode} primary={true}>Reset</Button>
        </>
    );
};

export default Nodes;