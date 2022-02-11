// Libraries
import express from "express";
import passport from "passport";

// Database model
import { UserModel } from "../../database/allModels";

const Router = express.Router();

/*
Route: /
Description: Get the user based on the id
params: _id
Access: Public
Method: GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const getUser = await UserModel.findById(_id);

        if (!getUser) return res.status(404).json({ error: "User Not Found!" })

        return res.json({ user: getUser });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/*
Route: /update
Description: update user id
params: _id
body: user data
Access: Public
Method: PUT
*/
Router.put("/update/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const { userData } = req.body;

        const updateUserData = await UserModel.findByIdAndUpdate(_id, {
            $set: userData
        }, {
            new: true
        })

        return res.json({ user: updateUserData })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;