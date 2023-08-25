import React from 'react'
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

const Alert = () => {
  return (
    <Alert>
        <AlertIcon />
        <AlertTitle>You added a property</AlertTitle>
        <AlertDescription>You property it´s added to the system</AlertDescription>
    </Alert>
  )
}

export default Alert