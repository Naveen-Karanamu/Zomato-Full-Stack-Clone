// Libraries
import express, { query, Router } from "express";
import passport from "passport";

// Database model
import { RestaurantModel } from "../../database/allModels";

const Router = express.Router();

/*
Route: /
Description: Get all restaurant details based on city
params: NONE
Access: Public
Method: GET
*/
Router.get("/", async (req, res) => {
    try {
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({ city });
        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/*
Route: /
Description: Get particular restaurant details based on the id
params: _id
Access: Public
Method: GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findOne({ _id });
        if (!restaurant) return res.status(404).json({ error: "Restaurant Not Found!" });

        return res.json({ restaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/*
Route: /search
Description: Get particular restaurant details based on the search String
params: NONE
body: searchString
Access: Public
Method: GET
*/
Router.get("/search", async (req, res) => {
    try {
        const { searchString } = req.body;
        const restaurant = await RestaurantModel.find({
            name: { $regex: searchString, $options: "i" }
        })

        if(!restaurant) return res.status(404).json({error:`${searchString} Restaurant Not Found!`});

        return res.json({restaurant});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})

export default Router;