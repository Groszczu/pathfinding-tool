import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../shared/Button';
import { nodeTypeColor } from '../nodes/NodeTypes';

const SelectedDrawToolButton = () => {
  const selectedDrawToolType = useSelector(({ tools }) => tools.drawTool);
  return (
    <Button
      selected={true}
      style={{
        backgroundColor: nodeTypeColor[selectedDrawToolType],
        maxWidth: '.75em',
        margin: '.2em .4em',
      }}
    />
  );
};

export default SelectedDrawToolButton;
