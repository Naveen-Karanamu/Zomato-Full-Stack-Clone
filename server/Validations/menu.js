import joi from "joi"

export const validateMenuList=(menuData)=>{
    const Schema = joi.object({
        _id:joi.string().required()
    })

    return Schema.validateAsync(menuData)
} 

export const validateMenuImage=(menuData)=>{
    const Schema = joi.object({
        _id:joi.string().required()
    })

    return Schema.validateAsync(menuData)
} 