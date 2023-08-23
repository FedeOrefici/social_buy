import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './views/Home'
import { Box } from '@chakra-ui/react'

function App() {
  
  return (
    <Box display='flex' w='100%'>
      <Navbar />
      <Home />

    </Box>
  )
}

export default App
