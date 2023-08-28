import React from 'react'
import { Alert, AlertIcon, AlertDescription } from '@chakra-ui/react'

const ErrorModal = () => {
  return (
    <Alert h='15%' position='relative' status='error' w='100%' display='flex' alignItems='center' justifyContent='center' flexDirection='column' mt='10px'>
        <AlertIcon  />
        <AlertDescription>empty fields</AlertDescription>
    </Alert>
  )
}

export default ErrorModal