import React from 'react';
import { Amount, Typography, Counter } from './style';
import { Container } from '../index';

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
