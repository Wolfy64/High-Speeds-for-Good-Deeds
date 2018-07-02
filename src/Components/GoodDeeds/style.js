import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Wrapper from '../UI/Wrapper';

export const MyButton = styled(Button)`
  min-width: 200px !important;
  width: 300px;
  height: 50px;
  margin: 20px !important;
`;

export const MyWrapper = styled(Wrapper)`
  text-align: center;
`;

export const Typography = styled.div`
  width: 100%;
  background-color: #fef9c7;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  color: #026670;
  text-align: center;
  font-size: 1.5rem;
`;
