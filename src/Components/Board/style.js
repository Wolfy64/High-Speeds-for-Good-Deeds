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

export const Messages = styled.div`
  text-align: center;
  flex: 2;
`;
