import React from 'react'
import { Card, CardBody, Text, Image, Box, Badge, Avatar } from '@chakra-ui/react'
import data from '../data/data.json'

const Post = () => {

  


  return (
    <>
    {data.map((user) => (
        <Card w='70%' display='flex' justifyContent='center' alignItems='center'>
        <CardBody display='flex' alignItems='center' justifyContent='space-around' w='100%' p='10px'>
          <Box w='20%' h='90%' display='flex' flexDirection='column' p='30px' alignItems='center' justifyContent='center'>
            <Avatar size='md' src='https://bit.ly/dan-abramov'/>
            <Text fontWeight='bold' textAlign='center' py='4px'>{user.seller}</Text>
          </Box>
          <Box h='90%' w='80%' p='10px' display='flex' alignItems='center' justifyContent='center' gap='30px'>
            <Image w='300px' src={user.imageUrl} h='200' />
            <Box w='60%' h='100%' py='4px'>
              <Box display='flex' gap='10px'>
                <Text fontWeight='bold'>{user.name}</Text>
                <Badge borderRadius='full' px='2' display='flex' alignItems='center' fontSize='10px' colorScheme={user.status === 'on sale' || user.status === 'on negotiations' ? 'teal' : 'red'}>
                  {user.status}
                </Badge>
              </Box>
              <Text textAlign='justify'>{user.description}</Text>
              <Text>$ {user.price}</Text>
            </Box>
          </Box>
        </CardBody>
      </Card>
    ))}
    </>
  )
}

export default Post