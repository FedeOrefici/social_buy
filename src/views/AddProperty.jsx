import { FormControl, FormLabel, Input, Select, Textarea, Button, NumberInput, NumberInputField } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { DataContext } from '../context/ContextData'

const AddProperty = () => {

    const { addProperty } = useContext(DataContext)

    const [property, setProperty] = useState({
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
    }



  return (
    <form onSubmit={handleSubmit}>
    <FormControl w='85%'>
        <FormLabel>name</FormLabel>
        <Input onChange={handleChange} name="name" type='text' value={property.name} />
        <FormLabel>price</FormLabel>
        <NumberInput>
            <NumberInputField onChange={handleChange} name="price" value={property.price} />
        </NumberInput>
        <FormLabel>Description</FormLabel>
        <Textarea onChange={handleChange} name="description" value={property.description} />
        <FormLabel>picture</FormLabel>
        <Input type='file' onChange={handleChange} name="picture" value={property.picture} />
        <Select onChange={handleChange} name="type" value={property.type}>
            <option>Select a property</option>
            <option>House</option>
            <option>Building</option>
        </Select>
        <Button type='submit'>Add</Button>
        
    </FormControl>
    </form>
  )
}

export default AddProperty