import React from 'react'
import { Card, CardBody, Text, Image, Box, Badge, Avatar } from '@chakra-ui/react'
// import data from '../data/data.json'

const Post = () => {

  const data = localStorage.getItem('property')
  const dataParsed = JSON.parse(data)


  return (
    <Box overflowY='scroll' flexDirection='column' gap='10px' display='flex' py='20px'>
    {dataParsed && dataParsed.map((user) => (
        <Card w='70%' display='flex' justifyContent='center' alignItems='center' margin='auto' bg='#FBF9FF'>
          <CardBody display='flex' alignItems='center' justifyContent='space-around' w='100%' p='10px'>
            <Box w='20%' h='90%' display='flex' flexDirection='column' p='30px' alignItems='center' justifyContent='center'>
              <Avatar size='md' src='https://bit.ly/dan-abramov'/>
              <Text fontWeight='bold' textAlign='center' py='4px'>{user.name}</Text>
            </Box>
            <Box h='90%' w='80%' p='10px' display='flex' alignItems='center' justifyContent='center' gap='30px'>
              <Image w='300px' src={user.picture} h='200' />
              <Box w='60%' h='100%' py='4px'>
                <Box display='flex' gap='10px'>
                  <Badge borderRadius='full' px='2' display='flex' alignItems='center' fontSize='10px' colorScheme={user.status === 'on sale' || user.status === 'on negotiations' ? 'teal' : 'red'}>
                    {user.status}
                  </Badge>
                  <Text fontWeight='bold'>{user.name}</Text>
                </Box>
                <Text textAlign='justify'>{user.description}</Text>
                <Text>$ {user.price}</Text>
              </Box>
            </Box>
          </CardBody>
      </Card>
    ))}
    </Box>
  )
}

export default Post