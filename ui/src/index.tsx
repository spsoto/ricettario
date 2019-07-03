import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import { client } from 'lib/apollo';

import App from './App';

import './style/index.scss';

const Render = () => (
  <ApolloProvider client={client}>
    <App></App>
  </ApolloProvider>
);

ReactDOM.render(<Render />, document.getElementById('root'));
