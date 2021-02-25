import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import App from '../src/components/template';
import store from './core/reduxStore/store';
import theme from './core/styles/theme';
import globalStyles from './core/styles';

const GlobalStyle = createGlobalStyle`${globalStyles}`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </>
  </ThemeProvider>,
  document.getElementById("root")
);
