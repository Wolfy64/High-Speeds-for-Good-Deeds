import styled from 'styled-components';

export const Background = styled.div`
  background-color: #fef9c7;
  border-radius: 5px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
