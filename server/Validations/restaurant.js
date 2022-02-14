import joi from "joi";

export const validateRestaurantCity=(restaurantObj)=>{
    const Schema= joi.object({
        city:joi.string().required()
    })

    return Schema.validateAsync(restaurantObj);
}

export const validateRestaurantSearchString=(restaurantObj)=>{
    const Schema= joi.object({
        searchString:joi.string().required()
    })

    return Schema.validateAsync(restaurantObj);
}