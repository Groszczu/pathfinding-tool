import styled from 'styled-components';

const InlineFlex = styled.span`
    display: inline-flex;
    flex-direction: ${props => props.direction};
    justify-content: center;
    align-items: center;
    max-width: 450px;
    max-hight: 100%;
    font-size: clamp(1.4rem, 3.8vmin, 4rem);
    flex: 1 1 60px;
`;

export default InlineFlex;