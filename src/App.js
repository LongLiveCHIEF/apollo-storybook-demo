import React from 'react';
import logo from './logo.svg';
import ExchangeRates from './components/ExchangeRates'
import AppProvider from './apollo/apolloClient'

function App() {
  return (
    <AppProvider>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <ExchangeRates />
      </div>
  </AppProvider>
  )
}

export default App;
