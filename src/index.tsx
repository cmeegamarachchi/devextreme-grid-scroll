import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from '@material-ui/core';
import 'typeface-roboto';
import {theme} from './themes';

import App from './App';
import reportWebVitals from './reportWebVitals';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
