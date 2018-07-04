import React from 'react';
import Container from '../container';
import { Amount, Typography, Counter } from './style';

const Counters = props => {
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

export default Counters;
