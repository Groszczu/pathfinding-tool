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
    const algorithm = mapAlgorithmIdToFunc(algorithmId);
    const animationFrameTime = useSelector(({ tools }) => tools.animationFrameTime);

    const dispatch = useDispatch();
    const [pathfinding, cancel] = usePathfinding(nodes, startNode, endNode, algorithm, animationFrameTime)
    const startOnClick = () => pathfinding();
    const clearOnClick = () => { cancel(); dispatch(clearNodes()); };
    const resetOnClick = () => { cancel(); dispatch(resetNodes()); };

    let onClick;
    let text;
    let primary = false;
    if (state === pathfindingState.ready) {
        onClick = startOnClick;
        text = 'Start';
    } else {
        onClick = clearOnClick;
        text = 'Clear';
        primary = true;
    }

    return (
        <FullscreenFlexContainer fullscreen={fullscreen} bottom={0} right={0}>
            <Button onClick={onClick} primary={primary}>{text}</Button>
            <Button onClick={resetOnClick} primary={true}>Reset</Button>
        </FullscreenFlexContainer>
    );
};

export default OperationsPanel;