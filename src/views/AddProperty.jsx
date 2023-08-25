import { FormControl, FormLabel, Input, Select, Textarea, Button, NumberInput, NumberInputField, Box, Text, Alert } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/ContextData'
import validationProperty from './validations'
import Modal from '../components/Modal'
import { useNavigate } from 'react-router-dom'


const AddProperty = () => {

    const { addProperty } = useContext(DataContext)
    const navigate = useNavigate()
    
    const [send, setSend] = useState(false)
    const [property, setProperty] = useState({
        name: '',
        price: '',
        description: '',
        picture: '',
        type: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        price: '',
        description: '',
        picture: '',
        type: ''
    })

    const handleChange = (event) => {
        setProperty({
            ...property,
            [event.target.name]: event.target.name === 'price'
            ? +event.target.value 
            : event.target.value
        })
        setErrors(validationProperty({
            ...property,
            [event.target.name]: event.target.value
        }))
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(property, 'sending...');
        setProperty({
            name: '',
            price: '',
            description: '',
            picture: '',
            type: ''
        })
        setSend(true)
        
    }

    useEffect(() => {
        let timeOut = setTimeout(() => {setSend(false)}, 1200000)
        return () => clearTimeout(timeOut)
    }, [send])



  return (
    <Box w='85%' display='flex' flexDirection='column' h='100vh'>
    <form onSubmit={handleSubmit} style={{width:'85%', height:'85%'}}>
        <FormControl w='50%' mx='50px' mt='150px'>
        <Box h='110px'>
            <FormLabel>Name</FormLabel>
            <Input onChange={handleChange} name="name" type='text' value={property.name} />
            {errors && <Text color='red'>{errors.name}</Text>}
        </Box>
        <Box h='110px'>
            <FormLabel>Price</FormLabel>
            <NumberInput>
                <NumberInputField onChange={handleChange} name="price" value={property.price} />
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
            <Input type='file' onChange={handleChange} name="picture" value={property.picture} />
            {errors && <Text color='red'>{errors.picture}</Text>}
        </Box>
        <Box h='80px'>
            <Select onChange={handleChange} name="type" value={property.type}>
                <option disabled>Select a property</option>
                <option>House</option>
                <option>Building</option>
            </Select>
            {errors && <Text color='red'>{errors.type}</Text>}
        </Box>
            <Button type='submit'>Add</Button>
        </FormControl>
    </form>
    {send ? <Modal /> : null}
    </Box>
  )
}

export default AddProperty