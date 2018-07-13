import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const BtnLogOut = styled(Button)`
  && {
    color: #fff;
    background-color: rgb(225, 0, 80);
    min-width: 200px;
    height: 50px;
    margin: 20px;
    margin-top: 0px;
    &&:hover,
    :focus {
      background-color: #81002e;
    }
  }
`;

export const Typography = styled.div`
  background-color: #026670;
  color: #9fedd7;
  height: 100px;
  margin: auto;
  display: flex;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 20px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);

  p {
    margin: auto;
  }
`;
