import { FormControl, FormLabel, Input, Select, Textarea, Button, NumberInput, NumberInputField, Box, Text, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import validationProperty from './validations'
import Modal from '../components/Modal'
import { useNavigate } from 'react-router-dom'
import ErrorModal from '../components/ErrorModal'
import FileBase64 from 'react-file-base64'


const AddProperty = () => {

    const navigate = useNavigate()

    
    const [send, setSend] = useState(false)
    const [modalError, setModalError] = useState(false)

    const [property, setProperty] = useState({
        name: '',
        price: '',
        description: '',
        picture: '',
        type: '',
        status:''
    })

    const [errors, setErrors] = useState({
        name: '',
        price: '',
        description: '',
        picture: '',
        type: '',
        status:''
    })

    const handleChange = (event) => {
        setProperty({
            ...property,
            [event.target.name]: event.target.value
        })
        setErrors(validationProperty({
            ...property,
            [event.target.name]: event.target.value
        }))
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const errors = validationProperty(property)
        if(Object.keys(errors).length > 0){
            setModalError(true)
            return;
        }
        const existingData = JSON.parse(localStorage.getItem('property')) ?? []
        const newData = [...existingData, property]
        localStorage.setItem('property', JSON.stringify(newData))

        
        setProperty({
            name: '',
            price: '',
            description: '',
            picture: '',
            type: '',
            status: ''
        })

        setSend(true)
    }

    useEffect(() => {
        let timeOut = setTimeout(() => {setSend(false)}, 2000)
        return () => clearTimeout(timeOut)
    }, [send])

    useEffect(() => {
        let timeOut = setTimeout(() => {setModalError(false)}, 2000)
        return () => clearTimeout(timeOut)
    }, [modalError])


  return (
    <Box w='85%' display='flex' flexDirection='column' h='100vh'>
    <form onSubmit={handleSubmit} style={{width:'85%', height:'85%'}}>
        <FormControl w='50%' mx='50px' mt='150px'>
        <Box h='110px'>
            <FormLabel>Name</FormLabel>
            <Input onChange={handleChange} name="name" type='text' value={property.name} />
            {errors.name && <Text color='red'>{errors.name}</Text>}
        </Box>
        <Box h='110px'>
            <FormLabel>Price</FormLabel>
            <NumberInput>
                <Input onChange={handleChange} name="price" value={property.price} />
            </NumberInput>
            {errors && <Text color='red'>{errors.price}</Text>}
        </Box>
        <Box h='150px'>
            <FormLabel>Description</FormLabel>
            <Textarea onChange={handleChange} name="description" value={property.description} />
            {errors && <Text color='red'>{errors.description}</Text>}
        </Box>

        <Box h='110px'>
            <FormLabel>Picture</FormLabel>
            <FileBase64 multiple={false} onDone={(base64) => setProperty({...property, picture: base64})} />
            {errors && <Text color='red'>{errors.picture}</Text>}
        </Box>
        <Box h='80px'>
            <Select onChange={handleChange} name="type" value={property.type}>
                <option selected>Select a property</option>
                <option>House</option>
                <option>Building</option>
            </Select>
            {errors && <Text color='red'>{errors.type}</Text>}
        </Box>
        <Box h='80px'>
            <Select onChange={handleChange} name="status" value={property.status}>
                <option selected>Status</option>
                <option>on sale</option>
                <option>on negotiations</option>
                <option>sold</option>
            </Select>
            {errors && <Text color='red'>{errors.status}</Text>}
        </Box>
            <Button type='submit'>Add</Button>
        </FormControl>
    </form>
    {send ? <Modal /> : null}
    {modalError ? <ErrorModal /> : null}
    </Box>
  )
}

export default AddProperty