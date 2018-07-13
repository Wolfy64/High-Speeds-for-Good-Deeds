import React from 'react';
import { Amount, Typography, Container, Counter } from './style';

export default props => {
  return (
    <Container>
      <Counter>
        <Typography>Good deeds</Typography>
        <Amount>{props.goodDeeds}</Amount>
      </Counter>
      <Counter moneyRaised>
        <Typography>Money Raised</Typography>
        <Amount>£ {props.moneyRaised}</Amount>
      </Counter>
    </Container>
  );
};
