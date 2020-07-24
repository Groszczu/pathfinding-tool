import React from 'react';
import { toolTypes, nodeTypeColor } from '../nodes/NodeTypes';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setDrawTool } from '../tools/toolsSlice';
import InlineFlex from '../../shared/InlineFlex';
import Button from '../../shared/Button';

const DrawToolPicker = () => {
  const dispatch = useDispatch();
  const selectedDrawToolType = useSelector(({ tools }) => tools.drawTool);

  const boundSetToolType = (toolType) => dispatch(setDrawTool(toolType));

  return (
    <InlineFlex>
      {Array.from(toolTypes).map((type) => (
        <Button
          aria-label={`${type} button`}
          key={type}
          onClick={() => boundSetToolType(type)}
          selected={type === selectedDrawToolType}
          style={{
            backgroundColor: nodeTypeColor[type],
            maxWidth: '.75em',
            margin: '.2em',
          }}
        />
      ))}
    </InlineFlex>
  );
};

export default DrawToolPicker;
