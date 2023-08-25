import React from 'react'
import Post from '../components/Post'
import { Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box w='85%' h='100vh' display='flex' alignItems='center' justifyContent='center' flexDirection='column' py='30px'>
        <Post />
    </Box>
  )
}

export default Home