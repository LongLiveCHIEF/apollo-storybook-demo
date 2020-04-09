import React from 'react'
import { 
  ApolloClient, 
  ApolloProvider,
  HttpLink, 
  InMemoryCache,
} from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://48p1r2roz4.sse.codesandbox.io'
  })
})

function AppProvider({children}){
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>

  )
}

export default AppProvider
