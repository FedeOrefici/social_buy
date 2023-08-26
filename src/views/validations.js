const validationProperty = (property) => {
    const errors = {};
    if(!property.name){
        errors.name = 'Required'
    }
    if(!property.price){
        errors.price = 'Required'
    }
    if(!property.description){
        errors.description = 'Required'
    }
    if(!property.picture){
        errors.picture = 'Required'
    }
    if(!property.type){
        errors.name = 'Required'
    }
    if(!property.status){
        errors.status = 'Required'
    }
    return errors;
}

export default validationProperty;