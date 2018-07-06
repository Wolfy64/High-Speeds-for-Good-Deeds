import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { App, theme } from './style';
import { GoodDeed, GoodDeeds, Home, MoneyRaised } from '../Pages';
import { Error, Header, Footer } from '../Components';

export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <Header />
            <Switch>
              <Route path="/money-raised" component={MoneyRaised} />
              <Route path="/good-deeds/:id" component={GoodDeed} />
              <Route path="/good-deeds" component={GoodDeeds} />
              <Route path="/" component={Home} exact />
              <Route component={Error} />
            </Switch>
            <Footer />
          </MuiThemeProvider>
        </App>
      </BrowserRouter>
    );
  }
}
