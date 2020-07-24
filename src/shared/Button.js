import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 10px;
  background-color: ${(props) =>
    props.primary ? 'var(--primary-clr)' : 'var(--secondary-clr)'};
  font-size: var(--clamped-font-size);
  color: var(--light-text-clr);
  padding: ${(props) => (props.children ? '.5em .75em' : '.75em')};
  text-align: center;
  margin: 0.4rem;
  border: 2px solid black;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.25s, transform 0.25s;

  ${(props) =>
    props.selected &&
    css`
      opacity: 1;
      transform: scale(1.2, 1.2);
      border-color: var(--secondary-clr);
    `}

  :hover {
    opacity: 1;
  }
`;

export default Button;
