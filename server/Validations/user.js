import joi from "joi";

export const validateUserId=(userData)=>{
    const Schema=joi.object({
        _id:joi.string().required()
    })
    return Schema.validateAsync(userData);
};

