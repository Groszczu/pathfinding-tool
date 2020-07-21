import styled from 'styled-components';

const InlineFlex = styled.span`
    display: inline-flex;
    flex-direction: ${props => props.direction};
    justify-content: center;
    align-items: center;
    max-width: 400px;
    margin: 0;
`;

export default InlineFlex;