import React from 'react'
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container)

import App from './App'
import { BrowserRouter } from 'react-router-dom'

//include all styles
import '../src/scss/style.scss'

//Apollo client and graphql
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const API_URL = import.meta.env.VITE_GRAPHQL_URL

// initialize apollo client
const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
})

root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
)
