// Libraries
import express from "express";
import passport from "passport";

// Database model
import { ReviewModel } from "../../database/allModels";

// Validations
import { validateReviewDetails, validateReviewId } from "../../Validations/reviews";

const Router = express.Router();

/*
Route: /new
Description: Add a new review for food or restaurant
params: NONE
body: review object
Access: Public
Method: POST
*/
Router.post("/new", async (req, res) => {
    try {
        await validateReviewDetails(req.body)

        const { reviewData } = req.body;

        await ReviewModel.create(reviewData);

        return res.json({ review: "Review is successfully added" })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/*
Route: /delete
Description: Delete a review using it's id
params: _id
body: NONE
Access: Public
Method: DELETE
*/
Router.delete("/delete/:_id", async (req, res) => {
    try {
        await validateReviewId(req.params);
        
        const { _id } = req.params;

        await ReviewModel.findByIdAndDelete(_id);
        return res.json({ review: "Review is successfully deleted" })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

export default Router;