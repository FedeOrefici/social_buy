import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import DataProvider from './context/ContextData.jsx'
import UserProvider from './context/UsersData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
      <DataProvider>
      <UserProvider>
        <App />
      </UserProvider>
      </DataProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
