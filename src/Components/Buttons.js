import React from 'react';
import styled from 'styled-components';
import Container from './container';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)`
  min-width: 200px !important;
  height: 50px;
  margin: 20px !important;
`;

const MyContainer = styled(Container)`
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Buttons = props => {
  return (
    <MyContainer>
      <MyButton variant="contained" color="primary" onClick={props.cliked}>
        I’VE DONE A GOOD DEED
      </MyButton>
      <MyButton variant="contained" color="secondary" onClick={props.cliked}>
        I’D LIKE TO DONATE
      </MyButton>
    </MyContainer>
  );
};

export default Buttons;
