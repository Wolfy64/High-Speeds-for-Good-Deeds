import React from 'react';
import { Amount, Typography, Counter } from './style';
import { Container } from '../index';

export default props => {
  return (
    <Container>
      <Counter>
        <Amount>{props.goodDeeds}</Amount>
        <Typography>Good Deeds</Typography>
      </Counter>
      <Counter moneyRaised>
        <Amount>{props.moneyRaised} £</Amount>
        <Typography>Money Raised</Typography>
      </Counter>
    </Container>
  );
};
