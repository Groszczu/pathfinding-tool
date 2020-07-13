import styled from 'styled-components';

const Button = styled.button`
  border-radius: 10px;
  background-color: ${props => props.primary ? 'var(--primary-clr)' : 'var(--secondary-clr)'};
  font-size: 1.5rem;
  padding: .5em 1.5em;
  margin: 2% auto 0 auto;
  border: 2px solid ${props => props.primary ? 'var(--secondary-clr)' : 'var(--primary-clr)'};
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export default Button;