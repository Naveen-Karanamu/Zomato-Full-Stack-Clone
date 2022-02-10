// Libraries
import express, { query, Router } from "express";
import passport from "passport";
import multer from "multer";

// Database model
import { ImageModel } from "../../database/allModels";

// Utilities
import { s3Upload } from "../../Utilities/AWS/s3";

const Router = express.Router();

// Multer config
const storage = multer.memoryStorage();
const Upload = multer({ storage });

/*
Route: /
Description: Upload given image to s3 bucket and return the file link to mongodb
params: NONE
Access: Public
Method: POST
*/
Router.post("/", Upload.array("file",4), async (req, res) => {
    try {
        const file = req.files;

        // s3 Bucket options
        const bucketOptions = {
            Bucket: "",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read"
        }

        // upload to s3 and returns the url of the image
        const uploadImage = await s3Upload(bucketOptions);

        return res.status(200).json({ uploadImage });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})