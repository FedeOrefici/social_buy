import React from 'react'
import { Card, CardBody, Text, Image, Box, Badge } from '@chakra-ui/react'

const Post = () => {

    const profiles = [{
        imageUrl: 'https://bit.ly/2Z4KKcF',
        name: 'House',
        status: true
    },
    {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        name: 'House',
        status: false
    },
    {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      name: 'House',
      status: true
  }]



  return (
    <Box w='full' border='1px solid teal' display='flex' alignItems='center' justifyContent='center'>
    {profiles.map((user) => (
        <Card w='400px' h='400px' display='flex' justifyItems='center' alignItems='center'>
        <CardBody>
            <Image w='300px' src={user.imageUrl} />
            <Box><Badge borderRadius='full' px='2' colorScheme='teal'>On sale</Badge></Box>
            <Text>{user.name}</Text>
        </CardBody>
      </Card>
    ))}
    </Box>
  )
}

export default Post