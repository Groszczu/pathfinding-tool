import React from 'react';
import styled, { css } from 'styled-components';
import { useRef } from 'react';
import { useEffect } from 'react';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, calc(100% / ${props => props.columns}));
    grid-template-rows: repeat(${props => props.rows}, calc(100% / ${props => props.rows}));
    justify-content: center;
    position: absolute;
    top: 0;

    margin: 0 auto;
    user-select: none;

    z-index: 1;
    width: 100%;
    height: 100%;
`;

const GridWrapper = styled.div`
  position: relative;
  padding-bottom: ${props => props.aspectRatio}%;
  width: 100%;
`;

const ResizeWindow = styled.div`
  margin: 0 auto;
  min-width: ${props => props.columns * 6}px;
  max-width: 100%;
  background: var(--empty-node-clr);
  border-radius: 10px;
  overflow: hidden;
  resize: horizontal;
  border: 3px solid black;
  ${props => {
        if (!props.fullscreen) {
            return;
        }
        const { screen } = window;
        const { width, height } = screen;
        const calculatedWidth = height > width ? '100vmin' : `${props.aspectRatio}vmax`;
        return css`
            left: calc((100vw - ${calculatedWidth}) / 2);
            top: 0;
            position: absolute;
            max-width: ${calculatedWidth};
        `;
    }
    }
`;

export default function ResizableGrid(props) {
    const resizeWindowRef = useRef(null);

    useEffect(() => {
        // override resized width on fullscreen toggle
        resizeWindowRef.current.style.width = '100%';
    }, [props.fullscreen]);

    const aspectRatio = (props.rows / props.columns) * 100;
    return (
        <ResizeWindow ref={resizeWindowRef} fullscreen={props.fullscreen} aspectRatio={aspectRatio} columns={props.columns}>
            <GridWrapper aspectRatio={aspectRatio}>
                <GridContainer {...props} />
            </GridWrapper>
        </ResizeWindow>);
};