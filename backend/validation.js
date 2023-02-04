const Joi = require("joi")

module.exports = (data) => {
    let schema = Joi.object({

        age: Joi.string().required(),
        gender: Joi.string().required(),
        order: Joi.string().required(),
        qualityfood: Joi.string().required(),
        tasteoffood: Joi.string().required(),  
        servingmethod: Joi.string().required(),    
        staffbehave: Joi.string().required(),
        cleanliness: Joi.string().required(),  
        likedproduct: Joi.string().min(0),    
        suggestion: Joi.string().min(0),    
        contactnumber: Joi.string().min(0),    
        formDate: Joi.string().min(0),    
        image: Joi.string().min(0),    
        cityId: Joi.string().min(0), 

    })
  
    // This is a shorter version
    const { error } = schema.validate(data);

    return error;
}