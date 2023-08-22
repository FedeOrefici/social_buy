import React from 'react'
import { Card, CardBody, Text, Image, Box, Badge } from '@chakra-ui/react'

const Profile = () => {

    const profile = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        name: 'karl',
    }



  return (
    <div>
        <Card>
        <CardBody>
            <Image w='300px' src={profile.imageUrl} />
            <Box>
                <Badge borderRadius='full' px='2' colorScheme='teal'>Online</Badge>
            </Box>
            <Text>{profile.name}</Text>
        </CardBody>
      </Card>
    </div>
  )
}

export default Profile