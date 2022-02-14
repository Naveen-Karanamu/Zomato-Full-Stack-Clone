import joi from "joi";

export const validateRestaurantId=(restaurantId)=>{
    const Schema= joi.object({
        _id:joi.string().required()
    })

    return Schema.validateAsync(restaurantId);
}

export const validateCategory=(category)=>{
    const Schema= joi.object({
        _id:joi.string().required()
    })

    return Schema.validateAsync(category);
}