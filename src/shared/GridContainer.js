import styled from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22px, 1fr));
    grid-gap: 1px;
`;

export default GridContainer;