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
  max-width: 960px
  color: #9fedd7;
  height: 100px;
  margin: auto;
  display: flex;
  font-size: larger;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 20px;
  p {
    margin: auto;
  }

  @media (max-width: 960px){
    border-radius: 0px;
  }
`;
