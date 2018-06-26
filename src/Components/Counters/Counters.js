import React from 'react';
import Container from '../container';
import Counter from './Counter';

const Counters = props => {
  return (
    <Container>
      <Counter goodDeeds={props.goodDeeds} />
      <Counter moneyRaised={props.moneyRaised} />
    </Container>
  );
};

export default Counters;
