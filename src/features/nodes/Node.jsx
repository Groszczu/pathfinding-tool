import React from 'react';
import styled, { css } from 'styled-components';

const Square = styled.span`
    width: 20px;
    height: 20px;
    border: 1px solid grey;
    border-radius: 2px;

    ${
        props => props.wall && css`background: red`
    }
`;
const Node = ({ node, onMouseHold }) => {

    const style = {
        gridColumnStart: node.x + 1,
        gridRowStart: node.y + 1,
        gridColumnEnd: 'span 1',
        gridRowEnd: 'span 1', 
    };

    return (
        <Square wall={node.wall} style={style} onMouseOver={onMouseHold} />
    );
};

export default Node;