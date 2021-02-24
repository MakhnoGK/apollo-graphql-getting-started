import React from 'react'
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, gql } from '@apollo/client';
import { NormalizedCacheObject } from '@apollo/client/cache/inmemory/types';
import { cache } from './cache';
import Pages from './pages';
import injectStyles from './styles';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql',
});

injectStyles();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
