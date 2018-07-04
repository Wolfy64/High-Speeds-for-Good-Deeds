import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Wrapper = styled.div`
  margin: auto;
  max-width: 320px;
  form {
    padding: 10px;
  }
`;

export const MyButton = styled(Button)`
  && {
    min-width: 200px;
    height: 50px;
    margin: 20px;
  }
`;
