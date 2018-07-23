import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Background = styled.div`
  background-color: #fef9c7;
  border-radius: 5px;
`;

export const MyButton = styled(Button)`
  && {
    height: 50px;
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`;

export const ContainerMsg = styled.div`
  flex: 2;
`;
