//Libraries
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Models
import { UserModel } from "../../database/user/index";

const Router = express.Router();

/*
Route: /signup
Description: Signup with email / Phone number and password
params: NONE
Access: Public
Method: POST
*/
Router.post("/signup", async (req, res) => {
    try {
        await UserModel.findByEmailAndPhone(req.body.credentials);

        const newUser = await UserModel.create(req.body.credentials);

        const token = newUser.generateJWT();

        return (res.status(200).json({ token, status: "Success" }));

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;