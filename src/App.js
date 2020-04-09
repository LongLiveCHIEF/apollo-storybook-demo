import React from 'react';
import logo from './logo.svg';
import { 
  ApolloClient, 
  ApolloProvider,
  HttpLink, 
  InMemoryCache,
} from '@apollo/client'
import ExchangeRates from './components/ExchangeRates'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://48p1r2roz4.sse.codesandbox.io'
  })
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <ExchangeRates />
      </div>
  </ApolloProvider>
  )
}

export default App;
