import React, { Component } from 'react';
import styled from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Footer, GoodDeeds, Header, MoneyRaised } from '../Components';
import Layout from '../Containers/Layout';

const App = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default class extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#026670',
          contrastText: '#9FEDD7'
        },
        secondary: {
          main: '#9FEDD7',
          contrastText: '#026670'
        }
      }
    });

    return (
      <BrowserRouter>
        <App>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <Header />
            <Switch>
              <Route path="/" component={Layout} exact />
              <Route path="/good-deeds" component={GoodDeeds} />
              <Route path="/money-raised" component={MoneyRaised} />
              <Route component={Error} />
            </Switch>
            <Footer />
          </MuiThemeProvider>
        </App>
      </BrowserRouter>
    );
  }
}
