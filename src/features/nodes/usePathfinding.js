import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import NodeTypes from "./NodeTypes";
import { setNodesType, startPathfinding } from "./nodesSlice";

const usePathfinding = (nodes, algorithm, animationFrameTime) => {
    const dispatch = useDispatch();
    const resultTimeout = useRef(null);

    const pathfinding = useCallback(() => {
        dispatch(startPathfinding());
        const { visited, result } = algorithm(nodes);
        visited && dispatch(setNodesType({ nodes: visited, type: NodeTypes.visited }));
        if (result) {
            resultTimeout.current = setTimeout(() =>
                dispatch(setNodesType({
                    nodes: result,
                    type: NodeTypes.result,
                })
                )
                , animationFrameTime * visited.length);
        }
    }, [algorithm, nodes, animationFrameTime, dispatch]);

    const cancel = useCallback(() => clearTimeout(resultTimeout.current), [resultTimeout]);

    return [pathfinding, cancel];
};

export default usePathfinding;