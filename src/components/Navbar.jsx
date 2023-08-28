import { Stat, StatLabel, StatNumber, StatArrow, StatHelpText, Box, Text, Checkbox, CheckboxGroup, filter } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import {DataContext}  from '../context/ContextData'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const {data, filteredData, setFilteredData} = useContext(DataContext);
  const houseBuilding = localStorage.getItem('property')
  const parsedData = JSON.parse(houseBuilding)
  
  const handleClick = (event) => {
    if(event.target.checked){
      const filterData = parsedData.filter((check) => check.type === event.target.value)
      return setFilteredData(filterData);
    } else {
      return setFilteredData(parsedData);
    }

  }

  console.log(filteredData, 'aca filteredData');
  

  

  return (
    <Box w='15%' py='30px' h='100vh' display='flex' flexDirection='column' justifyContent='space-around' shadow='lg' bg='#FBF9FF'>
      {/* Filters */}
      <Box h='300px' px='30px' py='10px'>
      <Text color='gray.700' fontStyle='italic' fontWeight='medium'>Property</Text>
        <Box display='flex' flexDirection='column' mt='4px'>
          <Checkbox onChange={handleClick} name='House' value='House'>House</Checkbox>
          <Checkbox onChange={handleClick} name='Building' value='Building'>Building</Checkbox>
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

      {/* navegation */}
      <Box px='30px' display='flex' gap='5px' cursor='pointer' h='100px' flexDirection='column' justifyContent='center'>
        <Box display='flex' alignItems='center' _hover={{bg:'#B3B7EE'}} py='10px' px='5px' gap='10px'>
          <span class="material-symbols-outlined">home</span>
          <NavLink to='/'>Home</NavLink>
        </Box>
        <Box display='flex' gap='10px' _hover={{bg:'#B3B7EE'}} w='100%' py='10px' px='5px' alignItems='center'>
          <span class="material-symbols-outlined">add_circle</span>
          <NavLink to='/addProperty'>Add a property</NavLink>
        </Box>
      </Box>

       {/* dolar price */}
       <Box display='flex' w='100%' flexDirection='column' alignItems='center'>
        <Box w='70%' h='60px' p='5px'>
          <Stat display='flex'>
            <Box display='flex' flexDirection='column'>
              <StatLabel>Dolar price</StatLabel> 
              <StatNumber>${data?.oficial?.value_sell} = ARS</StatNumber>
              <Box display='flex' alignItems='center'>
                <StatArrow position='relative' bottom='3px' type={data?.oficial?.value_avg > data?.oficial?.value_sell ? 'decrease' : 'increase'}></StatArrow>
                <StatHelpText color='black'>0.27%</StatHelpText>
              </Box>
            </Box>
          </Stat>
        </Box>
      </Box>
      
    </Box>
  )
}

export default Navbar