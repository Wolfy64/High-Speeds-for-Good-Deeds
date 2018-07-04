import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GoodDeed, GoodDeedList, Wrapper } from '../index';
import { MyWrapper, Typography } from './style';

export default () => {
  return (
    <Wrapper>
      <Typography>
        <p>SUPERSTAR!</p>
        <p>What did you do?</p>
      </Typography>
      <Switch>
        <MyWrapper>
          <Route path="/good-deeds" render={GoodDeedList} exact />
          <Route path={`/good-deeds/:id`} component={GoodDeed} />
        </MyWrapper>
      </Switch>
    </Wrapper>
  );
};
