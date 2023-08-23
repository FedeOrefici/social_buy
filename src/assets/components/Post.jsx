import React from 'react'
import { Card, CardBody, Text, Image, Box, Badge, Avatar } from '@chakra-ui/react'

const Post = () => {

    const profiles = [{
      imageUrl: 'https://bit.ly/2Z4KKcF',
      name: 'House with two floors',
      status: 'on sale',
      description: 'Donec vulputate ac justo eu blandit. Nullam porttitor, enim in volutpat finibus, nulla metus malesuada purus, eu condimentum arcu purus eu tellus. Morbi in mi in sapien dictum laoreet. Sed viverra id ex eget blandit. Ut eget fermentum sapien. Donec sed lorem quis lorem pretium sodales. Aenean eu purus vel enim cursus sagittis non eu nunc. Suspendisse nibh lorem, tincidunt sit amet tristique a, commodo ac lorem. Duis consectetur nulla eu maximus pretium. Nullam non ullamcorper ipsum.'
    },
    {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      name: 'House on the beach',
      status: 'negociations',
      description: 'Donec vulputate ac justo eu blandit. Nullam porttitor, enim in volutpat finibus, nulla metus malesuada purus, eu condimentum arcu purus eu tellus. Morbi in mi in sapien dictum laoreet. Sed viverra id ex eget blandit. Ut eget fermentum sapien. Donec sed lorem quis lorem pretium sodales. Aenean eu purus vel enim cursus sagittis non eu nunc. Suspendisse nibh lorem, tincidunt sit amet tristique a, commodo ac lorem. Duis consectetur nulla eu maximus pretium. Nullam non ullamcorper ipsum.'
    },
    {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      name: 'House in the city',
      status: 'sold',
      description: 'Donec vulputate ac justo eu blandit. Nullam porttitor, enim in volutpat finibus, nulla metus malesuada purus, eu condimentum arcu purus eu tellus. Morbi in mi in sapien dictum laoreet. Sed viverra id ex eget blandit. Ut eget fermentum sapien. Donec sed lorem quis lorem pretium sodales. Aenean eu purus vel enim cursus sagittis non eu nunc. Suspendisse nibh lorem, tincidunt sit amet tristique a, commodo ac lorem. Duis consectetur nulla eu maximus pretium. Nullam non ullamcorper ipsum.'
  }]



  return (
    <Box w='full' border='1px solid teal' display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
    {profiles.map((user) => (
        <Card w='70%' h='400px' display='flex' justifyContent='center' alignItems='center' border='1px solid black' p='40px'>
        <CardBody display='flex' alignItems='center' justifyContent='space-around' w='100%' p='10px' border='1px solid green'>
          <Box pos='relative' bottom='100px' w='50%'>
            <Avatar size='sm' src='https://bit.ly/dan-abramov'/>
            <Box><Badge borderRadius='full' px='2' colorScheme='teal'>{user.status}</Badge></Box>
            <Text>{user.name}</Text>
          </Box>
          <Box border='1px solid red' w='50%'>
            <Image w='300px' src={user.imageUrl} />
            <Text>{user.description}</Text>
          </Box>
        </CardBody>
      </Card>
    ))}
    </Box>
  )
}

export default Post