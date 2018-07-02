import React from 'react';
import { Link } from 'react-router-dom';
import { MyButton, MyContainer } from './style';

export default props => {
  return (
    <MyContainer>
      <Link to="/good-deeds">
        <MyButton variant="contained" color="primary" onClick={props.cliked}>
          I’VE DONE A GOOD DEED
        </MyButton>
      </Link>
      <Link to="/money-raised">
        <MyButton variant="contained" color="secondary" onClick={props.cliked}>
          I’D LIKE TO DONATE
        </MyButton>
      </Link>
    </MyContainer>
  );
};
