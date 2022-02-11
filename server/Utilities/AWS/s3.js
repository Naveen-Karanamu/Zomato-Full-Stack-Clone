import AWS from "aws-sdk";

// AWS s3 bucker config
const s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "ap-south-1"
});

//function to Upload to s3
export const s3Upload = (options) => {
    return new Promise((resolve, reject) => {
        s3Bucket.upload(options, (error, data) => {
            if (error) return reject(error);
            return resolve(data);
        })
    })
}