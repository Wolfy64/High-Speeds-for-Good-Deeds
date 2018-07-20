import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const MyButton = styled(Button)`
  && {
    text-transform: initial;
    min-width: 200px;
    width: 300px;
    height: 50px;
    margin: 20px;

    @media (max-width: 600px) {
      margin: 20px 0px;
    }
  }
`;
