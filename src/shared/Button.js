import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 10px;
  background-color: ${props => props.primary ? 'var(--primary-clr)' : 'var(--secondary-clr)'};
  font-size: 1.5rem;
  color: var(--light-txt-clr);
  padding: .5em 1.5em;
  margin: 2% auto 0 auto;
  border: 2px solid black;
  cursor: pointer;
  opacity: ${props => props.selected ? 1 : 0.6};
  ${props => props.selected && css`transform: scale(1.2, 1.2);`}
  transition: all 0.25s;

  :hover {
    opacity: 1;
  }

`;

export default Button;