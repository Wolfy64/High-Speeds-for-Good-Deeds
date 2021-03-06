import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

export const App = styled.div`
  font-family: Lato, Roboto, sans-serif;
  background-color: #edeae5;
  font-size: 16px;
  min-width: 300px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const theme = createMuiTheme({
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
