import React from 'react';
import styled, { css } from 'styled-components';
import NodeTypes from './NodeTypes';

const Square = styled.span.attrs(props => ({
    style: { 
        transitionDelay: `${props.delay}ms`,
    }
}))`
    width: 20px;
    height: 20px;
    border: 1px solid var(--secondary-clr);
    opacity: 0.8;
    border-radius: 100%;
    transition: background-color 1s;

    ${
    props => props.wall && css`background: var(--background-clr);`
    }

    ${
    props => props.visited && css`background: var(--visited-node-clr);`
    }

    ${
    props => props.resultNode && css`background: var(--result-node-clr);`
    }

    ${
    props => props.startNode && css`background: var(--start-node-clr);
    box-shadow: 0px 0px 10px 5px rgba(9,135,0,1);`
    }

    ${
    props => props.endNode && css`background: var(--end-node-clr);
    box-shadow: 0px 0px 10px 5px rgba(252,3,3,1);`
    }
`;

const Node = ({ node, animationFrameDuration, startNode, endNode, onMouseDown, onMouseOver }) => {

    const style = {
        gridColumnStart: node.x + 1,
        gridRowStart: node.y + 1,
        gridColumnEnd: 'span 1',
        gridRowEnd: 'span 1',
    };

    return (
        <Square
            delay={node.visitedIndex * animationFrameDuration}
            wall={node.type === NodeTypes.wall}
            visited={node.type === NodeTypes.visited}
            resultNode={node.type === NodeTypes.result}
            startNode={startNode}
            endNode={endNode}
            style={style}
            onMouseDown={onMouseDown}
            onMouseOver={onMouseOver} />
    );
};

export default Node;