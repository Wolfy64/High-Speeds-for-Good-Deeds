import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Container from '../UI/Container';

export const MyButton = styled(Button)`
  && {
    min-width: 200px;
    height: 50px;
    margin: 20px;
  }
`;

export const MyContainer = styled(Container)`
  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
`;
