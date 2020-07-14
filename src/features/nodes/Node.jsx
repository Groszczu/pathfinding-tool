import React from 'react';
import styled from 'styled-components';
import { nodeTypeStyle } from './NodeTypes';

const Square = styled.span.attrs(({ delay, x, y }) => ({
    style: {
        gridColumnStart: x + 1,
        gridRowStart: y + 1,
        gridColumnEnd: 'span 1',
        gridRowEnd: 'span 1',
        transitionDelay: `${delay}ms`,
    }
}))`
    width: 100%;
    height: auto;
    border: 1px solid var(--secondary-clr);
    opacity: 0.8;
    border-radius: 100%;
    transition: background-color 1s;

    ${props => nodeTypeStyle[props.type]}
`;

const Node = ({ node, animationFrameDuration, onMouseDown, onMouseOver }) => {

    return (
        <Square
            delay={node.visitedIndex * animationFrameDuration}
            type={node.type}
            x={node.x}
            y={node.y}
            onMouseDown={onMouseDown}
            onMouseOver={onMouseOver}
        />
    );
};

export default Node;