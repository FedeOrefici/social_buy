import React from 'react'
import Post from '../components/Post'
import { Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box w='85%' display='flex' alignItems='center' justifyContent='center' flexDirection='column' overflowY='scroll' py='30px' gap='30px'>
        <Post />
    </Box>
  )
}

export default Home