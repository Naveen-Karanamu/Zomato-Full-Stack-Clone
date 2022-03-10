//Libraries
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

// Models
import { UserModel } from "../../database/user/index";

// Validations
import { validateSignUp, validateSignIn } from "../../Validations/auth";

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
        await validateSignUp(req.body.credentials);

        await UserModel.findByEmailAndPhone(req.body.credentials);

        const newUser = await UserModel.create(req.body.credentials);

        const token = newUser.generateJWT();

        return (res.status(200).json({ token, status: "Success" }));

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/*
Route: /signin
Description: Signin with email & password
params: NONE
Access: Public
Method: POST
*/
Router.post("/signin", async (req, res) => {
    try {
        await validateSignIn(req.body.credentials);

        const user = await UserModel.findByEmailAndPassword(req.body.credentials);

        const token = user.generateJWT();

        return (res.status(200).json({ token, status: "Success" }));

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route: /google
Description: Google signin
params: NONE
Access: Public
Method: POST
*/
Router.get("/google", passport.authenticate("google",
    {
        scope:
            [
                "https://www.googleapis.com/auth/userinfo.profile",
                "https://www.googleapis.com/auth/userinfo.email"
            ]
    }));

/*
Route: /google/callback
Description: Google signin callback
params: NONE
Access: Public
Method: POST
*/
Router.get("/google/callback", passport.authenticate("google",
    {
        failureRedirect: "/",
        
    }),
    (req,res)=>{
        return( res.redirect(`http://localhost:3000/google/${req.session.passport.user.token}`));
    })

export default Router;