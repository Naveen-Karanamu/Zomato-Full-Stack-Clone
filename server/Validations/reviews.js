import joi from "joi"

export const validateReviewDetails=(reviewData)=>{
    const Schema=joi.object({
        food:joi.object({type:joi.string(), ref:joi.string()}),
        restaurant:joi.object({type:joi.string(), ref:joi.string()}),
        user:joi.object({type:joi.string(), ref:joi.string()}),
        rating:joi.object({type:joi.string().required()}),
        reviewText:joi.object({type:joi.string().required()}),
        isFoodReview:joi.boolean(),
        isRestaurantReview:joi.boolean(),
        photos:joi.object({type:joi.string(), ref:joi.string()})
    })
    return Schema.validateAsync(reviewData);
}

export const validateReviewId=(reviewData)=>{
    const Schema=joi.object({
        _id:joi.string().required()
    })
    return Schema.validateAsync(reviewData);
}