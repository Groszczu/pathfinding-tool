import styled, { css } from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(22px, 1fr));
    justify-content: center;

    margin: 0 auto;
    padding: 10px;
    overflow: auto;
    background: var(--empty-node-clr);
    border-radius: 10px;
    border: 3px solid black;
    user-select: none;

    z-index: 1;

    ${
    props => props.columns &&
        css`grid-template-columns: repeat(${props.columns}, 25px);`
    }

    ${
    props => props.rows &&
        css`grid-template-rows: repeat(${props.rows}, 25px);`
    }

    ${
    props => {
        if (!props.fullscreen) {
            return;
        }
        const { screen } = window;
        const { width, height } = screen;
        const nodesOnShorterDimension = width > height ? props.rows : props.columns;
        return css`
            grid-template-columns: repeat(${props.columns}, calc(100vmin / ${nodesOnShorterDimension}));
            grid-template-rows: repeat(${props.rows}, calc(100vmin / ${nodesOnShorterDimension}));
            border: none;
            overflow: hidden;
            position: absolute;
            padding: 0;
            left: 0;
            top: 0;
            height: 100vh;
            width: 100vw;`

    }
    }
    }
`;

export default GridContainer;