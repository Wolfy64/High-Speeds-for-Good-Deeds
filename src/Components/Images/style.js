import styled from 'styled-components';

export const Images = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  margin-bottom: 10px;
  justify-content: center;
  height: max-content;
  flex: 1;

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
