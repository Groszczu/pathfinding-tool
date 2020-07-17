import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GridContainer from '../../shared/GridContainer';
import Node from './Node';
import { setNodesType, setVisited, clearNodes, resetNodes } from './nodesSlice';
import NodeTypes from './NodeTypes';
import dijkstra from '../../util/algorithms/dijkstra';
import useNodesSlice from './useNodesSlice';
import { getNodeChangeAction } from './nodeHelpers';
import OperationsPanel from '../tools/OperationsPanel';

const Nodes = ({ animationFrameDuration }) => {

    const [mousePressed, setMousePressed] = useState(false);
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
        if (!mousePressed) return;
        changeNodeType(node, type);
    };
    const changeNodeType = (node, type) =>
        canStartPathfinding && dispatch(getNodeChangeAction(node.x, node.y, type));

    let resultTimeout = useRef(null);
    const startPathfinding = () => {
        const { visited, result, moves } = dijkstra(nodes);
        visited && dispatch(setVisited({ nodes: visited }));
        if (result) {
            resultTimeout.current = setTimeout(() =>
                dispatch(setNodesType({
                    nodes: result,
                    type: NodeTypes.result,
                    withIndex: true
                })
                )
                , animationFrameDuration * moves);
        }
    };

    const boundClearNodes = () => { clearTimeout(resultTimeout.current); dispatch(clearNodes()); };
    const boundResetNodes = () => { clearTimeout(resultTimeout.current); dispatch(resetNodes()); };

    return (
        <>
            <GridContainer fullscreen={fullscreen} columns={columns} rows={rows}
                onMouseDown={() => canStartPathfinding && setMousePressed(true)}
                onMouseUp={() => canStartPathfinding && setMousePressed(false)}>
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

            <OperationsPanel
                fullscreen={fullscreen}
                canStart={canStartPathfinding}
                startOnClick={startPathfinding}
                clearOnClick={boundClearNodes}
                resetOnClick={boundResetNodes}
            />
        </>
    );
};

export default Nodes;