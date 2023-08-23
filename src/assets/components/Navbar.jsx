import { Box, Text, Input, Button } from '@chakra-ui/react'

const Navbar = () => {


  return (
    <Box h='100vh' border='1px solid green' w='15%' p='20px'>
      <Box>
        <Box>
          <span class="material-symbols-outlined">real_estate_agent</span>
        </Box>
        <Box w='80%' display='flex' flexDirection='column' gap='10px'>
          <Input />
          <Button>search</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar