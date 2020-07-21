import styled from 'styled-components';

const Slider = styled.input.attrs(() => ({
  type: 'range',
}))`
  width: ${props => props.width};
  max-height: 25px;
`;

export default Slider;