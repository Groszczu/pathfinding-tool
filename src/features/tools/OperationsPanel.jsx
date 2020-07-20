import React from 'react';
import Button from '../../shared/Button';
import FullscreenFlexContainer from '../../shared/FullscreenFlexContainer';
import { clearNodes, resetNodes } from '../nodes/nodesSlice';
import usePathfinding from '../nodes/usePathfinding';
import dijkstra from '../../util/algorithms/dijkstra';
import { useDispatch } from 'react-redux';
import { pathfindingState } from '../nodes/nodesSlice';
import { useSelector } from 'react-redux';

const OperationsPanel = () => {
    const fullscreen = useSelector(({ tools }) => tools.fullscreen);

    const nodes = useSelector(({ nodes }) => nodes.nodes);
    const state = useSelector(({ nodes }) => nodes.pathfinding);
    const animationFrameTime = useSelector(({ tools }) => tools.animationFrameTime);

    const dispatch = useDispatch();
    const [pathfinding, cancel] = usePathfinding(nodes, dijkstra, animationFrameTime)
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