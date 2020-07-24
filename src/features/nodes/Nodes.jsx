import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ResizableGrid from '../../shared/ResizableGrid';
import Node from './Node';
import useDrawToolsMouseEventHandlers from '../tools/useDrawToolsMouseEventHandlers';

const Nodes = () => {
  const columns = useSelector(({ nodes }) => nodes.columns);
  const rows = useSelector(({ nodes }) => nodes.rows);

  const animationFrameTime = useSelector(
    ({ tools }) => tools.animationFrameTime
  );
  const fullscreen = useSelector(({ tools }) => tools.fullscreen);

  const dispatch = useDispatch();

  const {
    handleMouseDown,
    handleMouseUp,
    onMouseDownOnNode,
    onMouseOverNode,
  } = useDrawToolsMouseEventHandlers(dispatch);

  const rowsIndices = [...Array(rows).keys()];
  const columnsIndices = [...Array(columns).keys()];

  return (
    <ResizableGrid
      fullscreen={fullscreen}
      columns={columns}
      rows={rows}
      onMouseDownCapture={handleMouseDown}
      onMouseUp={handleMouseUp}
      onContextMenu={(e) => e.preventDefault()}
    >
      {rowsIndices.map((y) =>
        columnsIndices.map((x) => (
          <Node
            key={`${x}_${y}`}
            x={x}
            y={y}
            animationFrameTime={animationFrameTime}
            onMouseDown={onMouseDownOnNode}
            onMouseOver={onMouseOverNode}
          />
        ))
      )}
    </ResizableGrid>
  );
};

export default Nodes;
