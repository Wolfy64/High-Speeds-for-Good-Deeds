import React from 'react';
import { GoodDeedList, Wrapper } from '../../Components';
import { Typography } from './style';

export default () => {
  return (
    <Wrapper>
      <Typography>
        <p>SUPERSTAR!</p>
        <p>What did you do?</p>
      </Typography>
      <GoodDeedList />
    </Wrapper>
  );
};
