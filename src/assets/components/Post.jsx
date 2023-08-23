import React from 'react'
import { Card, CardBody, Text, Image, Box, Badge, Avatar } from '@chakra-ui/react'


const Post = () => {

    const profiles = [{
      imageUrl: 'https://bit.ly/2Z4KKcF',
      name: 'House',
      status: 'on sale',
      seller: 'Mark',
      description: 'Donec vulputate ac justo eu blandit. Nullam porttitor, enim in volutpat finibus, nulla metus malesuada purus, eu condimentum arcu purus eu tellus. Morbi in mi in sapien dictum laoreet. Sed viverra id ex eget blandit. Ut eget fermentum sapien. Donec sed lorem quis lorem pretium sodales. Aenean eu purus vel enim cursus sagittis non eu nunc. Suspendisse nibh lorem, tincidunt sit amet tristique a, commodo ac lorem. Duis consectetur nulla eu maximus pretium. Nullam non ullamcorper ipsum.'
    },
    {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      name: 'Building',
      status: 'negociations',
      seller: 'Maria',
      description: 'Donec vulputate ac justo eu blandit. Nullam porttitor, enim in volutpat finibus, nulla metus malesuada purus, eu condimentum arcu purus eu tellus. Morbi in mi in sapien dictum laoreet. Sed viverra id ex eget blandit. Ut eget fermentum sapien. Donec sed lorem quis lorem pretium sodales. Aenean eu purus vel enim cursus sagittis non eu nunc. Suspendisse nibh lorem, tincidunt sit amet tristique a, commodo ac lorem. Duis consectetur nulla eu maximus pretium. Nullam non ullamcorper ipsum.'
    },
    {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      name: 'House',
      status: 'sold',
      seller: 'Christian',
      description: 'Donec vulputate ac justo eu blandit. Nullam porttitor, enim in volutpat finibus, nulla metus malesuada purus, eu condimentum arcu purus eu tellus. Morbi in mi in sapien dictum laoreet. Sed viverra id ex eget blandit. Ut eget fermentum sapien. Donec sed lorem quis lorem pretium sodales. Aenean eu purus vel enim cursus sagittis non eu nunc. Suspendisse nibh lorem, tincidunt sit amet tristique a, commodo ac lorem. Duis consectetur nulla eu maximus pretium. Nullam non ullamcorper ipsum.'
  },
  {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      name: 'House',
      status: 'on sale',
      seller: 'Alex',
      description: 'Donec vulputate ac justo eu blandit. Nullam porttitor, enim in volutpat finibus, nulla metus malesuada purus, eu condimentum arcu purus eu tellus. Morbi in mi in sapien dictum laoreet. Sed viverra id ex eget blandit. Ut eget fermentum sapien. Donec sed lorem quis lorem pretium sodales. Aenean eu purus vel enim cursus sagittis non eu nunc. Suspendisse nibh lorem, tincidunt sit amet tristique a, commodo ac lorem. Duis consectetur nulla eu maximus pretium. Nullam non ullamcorper ipsum.'
  },
  {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      name: 'House',
      status: 'on negotiations',
      seller: 'Frank',
      description: 'Donec vulputate ac justo eu blandit. Nullam porttitor, enim in volutpat finibus, nulla metus malesuada purus, eu condimentum arcu purus eu tellus. Morbi in mi in sapien dictum laoreet. Sed viverra id ex eget blandit. Ut eget fermentum sapien. Donec sed lorem quis lorem pretium sodales. Aenean eu purus vel enim cursus sagittis non eu nunc. Suspendisse nibh lorem, tincidunt sit amet tristique a, commodo ac lorem. Duis consectetur nulla eu maximus pretium. Nullam non ullamcorper ipsum.'
  }]



  return (
    <Box w='full' display='flex' alignItems='center' justifyContent='center' flexDirection='column' overflowY='scroll' h='100vh' gap='20px' py='100px'>
    {profiles.map((user) => (
        <Card w='70%' h='400px' display='flex' justifyContent='center' alignItems='center' p='40px'>
        <CardBody data-aos="flip-left" display='flex' alignItems='center' justifyContent='space-around' w='100%' p='10px'>
          <Box w='20%' h='90%' display='flex' flexDirection='column' p='30px' alignItems='center' justifyContent='center'>
            <Avatar size='md' src='https://bit.ly/dan-abramov'/>
            <Text fontWeight='bold'>{user.seller}</Text>
          </Box>
          <Box h='90%' w='80%' p='10px' display='flex' alignItems='center' justifyContent='center' gap='30px'>
            <Image w='300px' src={user.imageUrl} />
            <Box w='60%'>
              <Box display='flex' gap='10px'>
                <Text>{user.name}</Text>
                <Badge borderRadius='full' px='2' display='flex' alignItems='center' fontSize='10px' colorScheme='teal'>{user.status}</Badge>
              </Box>
              <Text textAlign='justify'>{user.description}</Text>
            </Box>
          </Box>
        </CardBody>
      </Card>

    ))}
     
    </Box>
  )
}

export default Post