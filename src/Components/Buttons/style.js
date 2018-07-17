import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Container from '../UI/Container';

export const MyButton = styled(Button)`
  && {
    min-width: 200px;
    height: 50px;
    margin-bottom: 20px;
  }
`;

export const MyContainer = styled(Container)`
  justify-content: space-around;
  padding: 0px 10px;
  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
`;
