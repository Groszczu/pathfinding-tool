import React from 'react';
import Button from '../../shared/Button';
import FullscreenFlexContainer from '../../shared/FullscreenFlexContainer';

const OperationsPanel = ({ fullscreen, canStart, startOnClick, clearOnClick, resetOnClick }) => {
    let onClick;
    let text;
    let primary = false;
    if (canStart) {
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