import styled, { css } from 'styled-components';

const FullscreenFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  font-size: var(--clamped-font-size);
  padding: 0.4em;
  margin: 0.8em 0;

  color: var(--light-text-clr);
  background-color: var(--light-background-clr);
  border-radius: 10px;
  border: 3px solid black;

  & > * {
    margin: 0;
  }

  ${(props) =>
    props.fullscreen &&
    css`
      & > * {
        width: 100%;
        margin: 0 !important;
      }

      & > * + * {
        margin-top: 0.4em !important;
      }

      flex-direction: column;

      position: fixed;
      top: ${props.top};
      right: ${props.right};
      left: ${props.left};
      bottom: ${props.bottom};
      z-index: ${props.zIndex};
      margin: 0.4rem;
    `}
`;

export default FullscreenFlexContainer;
