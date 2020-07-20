import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { nodeTypeStyle } from './NodeTypes';

const Square = styled.span.attrs(({ delay, x, y }) => ({
    style: {
        gridColumnStart: x + 1,
        gridRowStart: y + 1,
        gridColumnEnd: 'span 1',
        gridRowEnd: 'span 1',
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`
    }
}))`
    width: fill;
    height: fill;
    border: 1px solid var(--secondary-clr);

    ${props => nodeTypeStyle[props.type]}
`;

const Node = ({ animationFrameTime, x, y, onMouseDown, onMouseOver }) => {
    const node = useSelector(({nodes}) => nodes.nodes[y][x]);
    return (
        <Square
            delay={node.visitedIndex * animationFrameTime}
            type={node.type}
            x={node.x}
            y={node.y}
            onMouseDown={onMouseDown}
            onMouseOver={onMouseOver}
        />
    );
};

export default Node;