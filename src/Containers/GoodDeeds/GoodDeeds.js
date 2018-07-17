import React from 'react';
import { Typography } from './style';
import { GoodDeedList, Wrapper } from '../../Components';

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
