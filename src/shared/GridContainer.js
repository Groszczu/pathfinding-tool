import styled, { css } from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(22px, 1fr));
    grid-gap: 1px;
    margin: 0 auto;
    overflow: auto;
    background: var(--empty-node-clr);
    padding: 10px;
    border-radius: 10px;
    user-select: none;

    ${
        props => props.columns && 
            css`grid-template-columns: repeat(${props.columns}, minmax(22px, 1fr));`
    }

    ${
        props => props.rows && 
            css`grid-template-rows: repeat(${props.rows}, minmax(22px, 1fr));`
    }

    ${
        props => props.fullscreen &&
            css`
                position: absolute;
                left: 0;
                top: 0;
                height: 100vh;
                width: 100vw;`
    }
`;

export default GridContainer;