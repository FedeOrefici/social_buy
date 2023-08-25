import { Stat, StatLabel, StatNumber, StatArrow, StatHelpText, Box, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import {DataContext}  from '../context/ContextData'

const Navbar = () => {

  const {data} = useContext(DataContext);
  

  return (
    <Box w='15%' py='30px' h='100vh' display='flex' flexDirection='column' gap='50px' shadow='lg'>
      {/* dolar price */}
      <Box display='flex' w='100%' flexDirection='column' alignItems='center'>
        <Box w='70%' h='60px' p='5px'>
          <Stat display='flex'>
            <Box display='flex' flexDirection='column'>
              <StatLabel color='gray.500'>Dolar price</StatLabel> 
              <StatNumber>${data?.oficial?.value_avg} = ARS</StatNumber>
              <Box display='flex' alignItems='center'>
                <StatArrow position='relative' bottom='3px' type={data?.oficial?.value_avg > data?.oficial?.value_sell ? 'decrease' : 'increase'}></StatArrow>
                <StatHelpText>0.2%</StatHelpText>
              </Box>
            </Box>
          </Stat>
        </Box>
      </Box>  
      
      
        
      <Box h='600px' px='30px' py='10px'>
        filter
      </Box>



    </Box>
  )
}

export default Navbar