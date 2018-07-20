import React from 'react';
import { Wrapper } from './style';
import { Route, Switch } from 'react-router-dom';
import { GoodDeed, GoodDeeds, Home, MoneyRaised } from './index';
import { Error, Header, Footer } from '../Components';

export default () => (
  <React.Fragment>
    <Header />
    <Wrapper>
      <Switch>
        <Route path="/money-raised" component={MoneyRaised} />
        <Route path="/good-deeds/:id" component={GoodDeed} />
        <Route path="/good-deeds" component={GoodDeeds} />
        <Route path="/" component={Home} exact />
        <Route component={Error} />
      </Switch>
    </Wrapper>
    <Footer />
  </React.Fragment>
);
