import styled from 'styled-components';

const Slider = styled.input.attrs(() => ({
  type: 'range',
}))`
  width: 90%;
  padding: 0.8em;

  overflow: hidden;
  appearance: none;
  background-color: var(--empty-node-clr);
  border: 3px solid black;
  border-radius: 10px;

  opacity: ${(props) => (props.disabled ? 0.3 : 1)};

  &::-webkit-slider-thumb {
    appearance: none;
    cursor: ew-resize;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    border: 1px solid black;
    background: var(--primary-clr);
  }

  &::-moz-range-thumb {
    appearance: none;
    cursor: ew-resize;
    width: 16px;
    height: 16px;
    background: var(--primary-clr);
    border-radius: 100%;
    border: 1px solid black;
  }

  &::-ms-thumb {
    appearance: none;
    cursor: ew-resize;
    width: 16px;
    height: 16px;
    background: var(--primary-clr);
    border-radius: 100%;
    border: 1px solid black;
  }

  &::-webkit-slider-runnable-track {
    background-color: var(--visited-node-clr);
    border-radius: 10px;
    border: 1px solid black;
  }

  &::-moz-range-progress {
    background-color: var(--visited-node-clr);
  }

  &::-ms-fill-lower {
    background-color: var(--visited-node-clr);
  }
`;

export default Slider;
