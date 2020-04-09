import React from 'react';
import logo from './logo.svg';
import { 
  ApolloClient, 
  ApolloProvider,
  gql, 
  HttpLink, 
  InMemoryCache 
} from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://48p1r2roz4.sse.codesandbox.io'
  })
})

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result))

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
  </ApolloProvider>
  )
}

export default App;
