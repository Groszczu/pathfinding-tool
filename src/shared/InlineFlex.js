import styled from 'styled-components';

const InlineFlex = styled.span`
  display: inline-flex;
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: center;
  max-width: 450px;
  max-height: 100%;
  font-size: var(--clamped-font-size);
  flex: 1 1 60px;
`;

export default InlineFlex;
