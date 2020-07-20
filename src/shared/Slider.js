import styled from 'styled-components';

const Slider = styled.input.attrs(props => ({
  type: 'range',
  orient: props.vertical ? 'vertical' : 'horizontal'
}))`
  appearance: ${props => props.vertical ? 'slider-vertical' : 'slider-horizontal'};
`;

export default Slider;