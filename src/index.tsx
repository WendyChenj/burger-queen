import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './common/store/store';
import { StylesProvider, ThemeProvider } from '@material-ui/core';
import theme from './theme';
import { ApolloProvider, HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';

const graphQLink = new HttpLink({
  uri: 'http://localhost:5000',
});
const cache = new InMemoryCache();
const client = new ApolloClient({
  link: graphQLink,
  cache,
  credentials: 'include',
  resolvers: {},
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
