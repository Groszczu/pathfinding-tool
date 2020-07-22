import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 90vw;
  text-align: center;
  border-radius: 10px;
  
  @media (max-width: 425px) {
    width: 95%;
    max-width: 95vw;
  }

  @media (max-width: 320px) {
    width: 100%;
    max-width: 100vw;
  }
`;

export default Container;