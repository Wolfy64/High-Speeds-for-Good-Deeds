import React from 'react';
import { Amount, Typography, Container, Counter } from './style';
import loadingPrimary from './../../assets/loadingPrimary.svg';
import loadingSecondary from './../../assets/loadingSecondary.svg';

export default props => {
  const { goodDeeds, moneyRaised } = props;
  const loadP = <img src={loadingPrimary} alt="loading" width="50px" />;
  const loadS = <img src={loadingSecondary} alt="loading" width="50px" />;

  return (
    <Container>
      <Counter>
        <Typography>Good deeds</Typography>
        <Amount>{goodDeeds === 0 ? loadS : goodDeeds}</Amount>
      </Counter>
      <Counter moneyRaised>
        <Typography>Money Raised</Typography>
        <Amount>{moneyRaised === 0 ? loadP : moneyRaised}</Amount>
      </Counter>
    </Container>
  );
};
