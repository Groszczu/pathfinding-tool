import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 60%;
  max-width: 1920px;
  text-align: center;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 425px) {
    width: 95%;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`;

export default Container;
