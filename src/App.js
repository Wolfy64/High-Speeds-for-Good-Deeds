import React, { Component } from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Layout from './Containers/Layout';

const App = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
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
      <App>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Header />
          <Layout />
          <Footer />
        </MuiThemeProvider>
      </App>
    );
  }
}
