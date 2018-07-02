import React from 'react';
import Container from '../../UI/Container';
import { Amount, Typography, Counter } from './style';

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
