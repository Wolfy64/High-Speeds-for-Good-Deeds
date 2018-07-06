import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { App, theme } from './style';
import { Layout } from '../Containers';

export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <Layout />
          </MuiThemeProvider>
        </App>
      </BrowserRouter>
    );
  }
}
