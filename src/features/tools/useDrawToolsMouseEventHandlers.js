import { useRef, useEffect, useCallback } from 'react';
import { setNodesType } from '../nodes/nodesSlice';
import NodeTypes from '../nodes/NodeTypes';
import { setDrawTool } from './toolsSlice';
import { useSelector, useDispatch } from 'react-redux';

const setInternalDrawToolAndDispatch = (dispatch, drawToolRef, toolType) => {
  drawToolRef.current = toolType;
  dispatch(setDrawTool(toolType));
};

const useDrawToolsMouseEventHandlers = () => {
  const mousePressedRef = useRef(false);
  const draggingRef = useRef(false);

  const drawTool = useSelector(({ tools }) => tools.drawTool);
  const drawToolRef = useRef(drawTool);

  const dispatch = useDispatch();

  useEffect(() => {
    drawToolRef.current = drawTool;
  }, [drawTool]);

  const handleMouseDown = (e) => {
    // right click
    if (e.button === 2) {
      setInternalDrawToolAndDispatch(dispatch, drawToolRef, NodeTypes.empty);
    }
    mousePressedRef.current = true;
  };

  const onLeftClickUp = () => {
    // if left click is released
    // and it was dragging start/end note
    // set draw tool to wall type
    draggingRef.current && setInternalDrawToolAndDispatch(dispatch, drawToolRef, NodeTypes.wall);
    draggingRef.current = false;
  };

  const onRightClickUp = () => {
    setInternalDrawToolAndDispatch(dispatch, drawToolRef, NodeTypes.wall);
  };

  const handleMouseUp = (e) => {
    mousePressedRef.current = false;
    switch (e.button) {
      case 0:
        onLeftClickUp();
        break;
      case 2:
        onRightClickUp();
        break;
      default:
        break;
    }
  };

  const onMouseDownOnNode = useCallback(
    (node) => {
      if (node.type === NodeTypes.start || node.type === NodeTypes.end) {
        setInternalDrawToolAndDispatch(dispatch, drawToolRef, node.type);
        draggingRef.current = true;
      } else {
        dispatch(setNodesType({ nodes: [node], type: drawToolRef.current }));
      }
    },
    [dispatch]
  );

  const onMouseOverNode = useCallback(
    (node) => {
      if (!mousePressedRef.current) {
        return;
      }
      onMouseDownOnNode(node);
    },
    [onMouseDownOnNode]
  );

  return {
    handleMouseDown,
    handleMouseUp,
    onMouseDownOnNode,
    onMouseOverNode,
  };
};

export default useDrawToolsMouseEventHandlers;
