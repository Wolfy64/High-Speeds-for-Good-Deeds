import styled from 'styled-components';

export const Background = styled.div`
  background-color: #fef9c7;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Images = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  height: max-content;
  flex: 1;

  display: flex;
  flex-flow: wrap;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.div`
  margin: 5px;
  width: 100px;
  height: 100px;
  border: 2px solid #9fedd7;
  border-radius: 5px;
  overflow: hidden;
`;

export const Messages = styled.div`
  text-align: center;
  flex: 2;
`;
