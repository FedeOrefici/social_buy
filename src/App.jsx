import './App.css'
import Navbar from './components/Navbar'
import AddProperty from './views/AddProperty'
import Home from './views/Home'
import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <Box display='flex' w='100%'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addProperty' element={<AddProperty />} />
      </Routes>
    </Box>
  )
}

export default App
