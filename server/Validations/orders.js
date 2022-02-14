import joi from "joi";

export const validateOrderId = (orderData) => {
    const Schema = joi.object({
        _id: joi.string().required()
    })
    return Schema.validateAsync(orderData);
}

export const validateOrderDetails = (orderData) => {
    const Schema = joi.object({
        user:joi.object({type:joi.string(), ref:joi.string()}),
        orderDetails:joi.object({
            food:joi.object({type:joi.string(), ref:joi.string()}),
            quantity:joi.object({type:joi.number().required()}),
            payMode:joi.object({type:joi.string().required()}),
            status:joi.object({type:joi.string().required()}),
            paymentDeatils:joi.object({
                itemTotal:joi.object({type:joi.number().required()}),
                promo:joi.object({type:joi.number().required()}),
                tax:joi.object({type:joi.number().required()})                
            })
        })
    })
    return Schema.validateAsync(orderData);
}