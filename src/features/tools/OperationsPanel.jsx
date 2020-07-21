import React from 'react';
import Button from '../../shared/Button';
import FullscreenFlexContainer from '../../shared/FullscreenFlexContainer';
import { clearNodes, resetNodes } from '../nodes/nodesSlice';
import usePathfinding from '../nodes/usePathfinding';
import { useDispatch } from 'react-redux';
import { pathfindingState } from '../nodes/nodesSlice';
import { useSelector } from 'react-redux';
import { mapAlgorithmIdToFunc } from '../../util/algorithms/algorithmId';

const OperationsPanel = () => {
    const fullscreen = useSelector(({ tools }) => tools.fullscreen);

    const nodes = useSelector(({ nodes }) => nodes.nodes);
    const startNode = useSelector(({ nodes }) => nodes.startNode);
    const endNode = useSelector(({ nodes }) => nodes.endNode);
    const state = useSelector(({ nodes }) => nodes.pathfinding);
    const algorithmId = useSelector(({ tools }) => tools.pathfindingAlgorithm);
    const animationFrameTime = useSelector(({ tools }) => tools.animationFrameTime);

    const dispatch = useDispatch();

    const algorithm = mapAlgorithmIdToFunc(algorithmId);
    const [pathfinding, cancel] = usePathfinding(nodes, startNode, endNode, algorithm, animationFrameTime)

    const startOnClick = () => pathfinding();
    const clearOnClick = () => { cancel(); dispatch(clearNodes()); };
    const resetOnClick = () => { cancel(); dispatch(resetNodes()); };

    return (
        <FullscreenFlexContainer fullscreen={fullscreen} bottom={0} right={0} zIndex={99}>
            {
                state === pathfindingState.ready
                    ? <Button onClick={startOnClick} primary={false}>Start</Button>
                    : <Button onClick={clearOnClick} primary={true}>Clear</Button>
            }
            <Button onClick={resetOnClick} primary={true}>Reset</Button>
        </FullscreenFlexContainer>
    );
};

export default OperationsPanel;