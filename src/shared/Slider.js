import styled, { css } from 'styled-components';

const Slider = styled.input.attrs(props => ({
  type: 'range',
  orient: props.vertical ? 'vertical' : 'horizontal'
}))`
  width: ${props => props.width};
  appearance: ${props => props.vertical ? 'slider-vertical' : 'slider-horizontal'};
  ${props => props.vertical ? css`max-width: 25px;` : css`max-height: 25px;`}
`;

export default Slider;