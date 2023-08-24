import { Stat, StatLabel, StatNumber, StatArrow, StatHelpText, Box } from '@chakra-ui/react'
import { useContext } from 'react'
import {DataContext}  from '../context/ContextData'

const Navbar = () => {

  const {data} = useContext(DataContext);
  

  return (
    <Box h='100vh' border='1px solid green' w='15%' p='20px'>
      <Box>
        <Stat>
          <StatLabel>Dolar price</StatLabel>
          <StatNumber>{data?.oficial?.value_avg}</StatNumber>
          <StatArrow type={data?.oficial?.value_avg > data?.oficial?.value_sell ? 'increase' : 'decrease'}></StatArrow>
        </Stat>
      </Box>
      <Box>
       
      </Box>
    </Box>
  )
}

export default Navbar