import { Stat, StatLabel, StatNumber, StatArrow, StatHelpText, Box } from '@chakra-ui/react'
import { useContext } from 'react'
import {DataContext}  from '../context/ContextData'

const Navbar = () => {

  const {data} = useContext(DataContext);
  
  console.log(data)



  return (
    <Box h='100vh' border='1px solid green' w='15%' p='20px'>
      <Box>
        <Stat>
          <StatLabel>dolar price</StatLabel>
          <StatNumber>{data?.blue?.value_avg}</StatNumber>
            <StatHelpText>
              <StatArrow type='increase'></StatArrow>
              0,3%
            </StatHelpText>
        </Stat>
      </Box>
      <Box>
       filters
      </Box>
    </Box>
  )
}

export default Navbar