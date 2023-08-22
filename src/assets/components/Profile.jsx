import React from 'react'
import { Card, CardBody, Text, Image, Box, Badge } from '@chakra-ui/react'

const Profile = () => {

    const profiles = [{
        imageUrl: 'https://bit.ly/2Z4KKcF',
        name: 'karl',
        status: true
    },
    {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        name: 'Mark',
        status: false
    }]



  return (
    <Box w='full' border='1px solid teal' display='flex' alignItems='center' justifyContent='center'>
    {profiles.map((user) => (
        <Card w='400px' h='400px' display='flex' justifyItems='center' alignItems='center'>
        <CardBody>
            <Image w='300px' src={user.imageUrl} />
            <Box><Badge borderRadius='full' px='2' colorScheme='teal'>Online</Badge></Box>
            <Text>{user.name}</Text>
        </CardBody>
      </Card>
    ))}
    </Box>
  )
}

export default Profile