import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import NodeTypes from "./NodeTypes";
import { setNodesType, startPathfinding } from "./nodesSlice";

const usePathfinding = (nodes, algorithm, animationFrameDuration = 20) => {
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
                , animationFrameDuration * visited.length);
        }
    }, [algorithm, nodes, animationFrameDuration, dispatch]);

    const cancel = useCallback(() => clearTimeout(resultTimeout.current), [resultTimeout]);

    return [pathfinding, cancel];
};

export default usePathfinding;