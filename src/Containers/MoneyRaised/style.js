import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const MyButton = styled(Button)`
  && {
    display: inherit;
    margin: 20px 20px;
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  max-width: 960px;
  text-align: center;
  justify-content: space-around;
`;
