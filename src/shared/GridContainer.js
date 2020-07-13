import styled, { css } from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22px, 1fr));
    grid-gap: 1px;
    margin: 0 auto;
    overflow: auto;
    background: #ffeadb;
    padding: 10px;
    border-radius: 10px;

    ${
        props => props.columns && 
            css`grid-template-columns: repeat(${props.columns}, minmax(22px, 1fr));`
    }
`;

export default GridContainer;