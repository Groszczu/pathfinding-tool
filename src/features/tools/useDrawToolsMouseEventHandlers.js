import { useRef } from "react";
import { changeDrawTool, draw } from '../nodes/nodesSlice';
import NodeTypes from "../nodes/NodeTypes";

const useDrawToolsMouseEventHandlers = (dispatch) => {
    const mousePressedRef = useRef(false);
    const draggingRef = useRef(false);

    const handleMouseDown = (e) => {
        // right click
        if (e.button === 2) {
            dispatch(changeDrawTool(NodeTypes.empty));
        }
        mousePressedRef.current = true;
    };

    const handleMouseUp = (e) => {
        mousePressedRef.current = false;
        switch (e.button) {
            case 0: //left click
                // if left click is released
                // and it was dragging start/end note
                // set draw tool to wall type
                draggingRef.current && dispatch(changeDrawTool(NodeTypes.wall));
                draggingRef.current = false;
                break;
            case 2: //right click
                // if right click is released set draw tool to wall type
                dispatch(changeDrawTool(NodeTypes.wall));
                break
            default: break;
        }
    };

    const changeNodeTypeIfPressed = (node) => {
        if (!mousePressedRef.current) return;
        changeNodeType(node);
    };
    const changeNodeType = (node) => {
        if (node.type === NodeTypes.start || node.type === NodeTypes.end) {
            dispatch(changeDrawTool(node.type));
            draggingRef.current = true;
        }
        dispatch(draw({ nodes: [node] }));
    }

    return { handleMouseDown, handleMouseUp, changeNodeType, changeNodeTypeIfPressed };
};

export default useDrawToolsMouseEventHandlers;