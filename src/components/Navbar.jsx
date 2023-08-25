import { Stat, StatLabel, StatNumber, StatArrow, StatHelpText, Box } from '@chakra-ui/react'
import { useContext } from 'react'
import {DataContext}  from '../context/ContextData'

const Navbar = () => {

  const {data} = useContext(DataContext);
  

  return (
    <Box border='1px solid green' w='15%' py='30px' h='100vh' display='flex' flexDirection='column' gap='50px'>
      {/* dolar price */}
      <Box display='flex' w='100%'>
        <Box w='70%' h='60px' p='5px'>
          <Stat display='flex' alignItems='center' justifyContent='center'>
            <Box display='flex' flexDirection='column'>
              <StatLabel color='gray.500'>Dolar price</StatLabel> 
              <StatNumber>${data?.oficial?.value_avg} = ARS</StatNumber>
            </Box>
        </Stat>
        </Box>
        <Box w='20%' h='60px' p='5px'>
          <Stat display='flex' alignItems='center' justifyContent='center'>
            <StatArrow type={data?.oficial?.value_avg > data?.oficial?.value_sell ? 'decrease' : 'increase'}></StatArrow>
            <StatHelpText>0.2%</StatHelpText>
          </Stat>
        </Box>
      </Box>
      <Box border='1px solid red' h='600px'>
        filters
      </Box>





    </Box>
  )
}

export default Navbar