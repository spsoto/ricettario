import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  // TODO: Change me for production
  uri: 'http://localhost:3000/graphql',
});
