import styled from 'styled-components';

const Slider = styled.input.attrs(() => ({
  type: 'range',
}))`
  width: 100%;
`;

export default Slider;