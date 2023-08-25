import { Stat, StatLabel, StatNumber, StatArrow, StatHelpText, Box, Text, Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { useContext } from 'react'
import {DataContext}  from '../context/ContextData'

const Navbar = () => {

  const {data} = useContext(DataContext);
  

  return (
    <Box w='15%' py='30px' h='100vh' display='flex' flexDirection='column' justifyContent='space-around' gap='50px' shadow='lg'>
      {/* Filters */}
      <Box h='600px' px='30px' py='10px'>
      <Text color='gray.700' fontStyle='italic' fontWeight='medium'>Porperty</Text>
        <Box display='flex' flexDirection='column' mt='4px'>
          <Checkbox>House</Checkbox>
          <Checkbox>Building</Checkbox>
        </Box>
        <Box display='flex' flexDirection='column' gap='5px' mt='50px'>
          <Box display='flex' gap='4px'>
            <Text color='gray.700' fontStyle='italic' fontWeight='medium'>Price</Text>
          </Box>
          <Checkbox>$0 - $500.000</Checkbox>
          <Checkbox>$500.000 - $1.000.000</Checkbox>
          <Checkbox>$1.000.000 - $2.000.000</Checkbox>
        </Box>
      </Box>
       {/* dolar price */}

       <Box display='flex' w='100%' flexDirection='column' alignItems='center'>
        <Box w='70%' h='60px' p='5px'>
          <Stat display='flex'>
            <Box display='flex' flexDirection='column'>
              <StatLabel color='gray.500'>Dolar price</StatLabel> 
              <StatNumber>${data?.oficial?.value_sell} = ARS</StatNumber>
              <Box display='flex' alignItems='center'>
                <StatArrow position='relative' bottom='3px' type={data?.oficial?.value_avg > data?.oficial?.value_sell ? 'decrease' : 'increase'}></StatArrow>
                <StatHelpText>0.2%</StatHelpText>
              </Box>
            </Box>
          </Stat>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar