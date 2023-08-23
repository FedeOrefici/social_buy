import React from 'react'
import Post from '../components/Post'
import { Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box w='85%' border='1px solid green' pt='30px'>
        <Post />
    </Box>
  )
}

export default Home