import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { GoodDeed, GoodDeeds, Home, MoneyRaised } from './index';
import { Error, Header, Footer, Wrapper } from '../Components';

export default class extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Header />
        <Wrapper
          style={{
            minHeight: '97vh',
            paddingTop: '150px',
            textAlign: 'center'
          }}
        >
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
  }
}
