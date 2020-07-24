import React from 'react';
import { useSelector } from 'react-redux';
import FullscreenFlexContainer from '../../shared/FullscreenFlexContainer';
import AnimationSpeedSlider from './AnimationSpeedSlider';
import { useState } from 'react';
import AlgorithmPicker from './AlgorithmPicker';
import SelectedDrawToolButton from './SelectedDrawToolButton';
import DrawToolPicker from './DrawToolPicker';

const ToolBar = () => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const fullscreen = useSelector(({ tools }) => tools.fullscreen);

  return (
    <FullscreenFlexContainer
      fullscreen={fullscreen}
      top={0}
      right={0}
      zIndex={100}
      onMouseEnter={fullscreen ? () => setHovered(true) : null}
      onMouseLeave={fullscreen ? () => setHovered(false) : null}
      onFocus={fullscreen ? () => setFocused(true) : null}
      onBlur={fullscreen ? () => setFocused(false) : null}
    >
      {!fullscreen || hovered || focused ? (
        <>
          <DrawToolPicker />
          <AnimationSpeedSlider />
          <AlgorithmPicker />
        </>
      ) : (
        <SelectedDrawToolButton />
      )}
    </FullscreenFlexContainer>
  );
};

export default ToolBar;
