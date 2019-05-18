import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { App } from '@src/components';
import axios from 'axios';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
  (
    <ThemeProvider
      theme={
        createMuiTheme({
          palette: {
            type: 'dark'
          }
        })
      }
    >
      <CssBaseline />
      <App />
    </ThemeProvider>
  ), document.getElementById('root')
);

console.log(axios.create());
