import React from 'react'
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

const Modal = () => {
  return (
    <Alert h='15%' position='relative' status='success' w='100%' display='flex' alignItems='center' justifyContent='center' flexDirection='column' mt='10px'>
        <AlertIcon />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>You added a property</AlertDescription>
    </Alert>
  )
}

export default Modal