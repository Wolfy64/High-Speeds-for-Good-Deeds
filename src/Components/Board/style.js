import styled from 'styled-components';

export const Background = styled.div`
  background-color: #fef9c7;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Images = styled.div`
  text-align: center;
  flex: 1;
`;

export const Image = styled.img`
  margin: 10px;
  width: 35%;
  border: 2px solid #9fedd7;
  border-radius: 5px;

  @media (max-width: 500px) {
    width: 10%;
  }
`;

export const Messages = styled.div`
  text-align: center;
  flex: 2;
`;
