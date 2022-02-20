import express from "express"

import { initializeMailgun } from "../../config/mail.config";

const Router = express.Router();

/*
Route: /
Description: Send a mail
Params: NONE
Acess: Public
Method: PoST
body: from, to, subject, text
*/
Router.post("/", async (req, res) => {
    try {
        // Mandatory objects in the mail data
        const { from, to, subject, text } = req.body.mailData;

        // Initializing mailgun library
        const sendMail = initializeMailgun();

        await sendMail.messages().send({ from, to, subject, text });

        return res.status(200).json({ status: "Mail Sent" });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

export default Router;