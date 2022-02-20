import mailgun from "mailgun-js"

export function initializeMailgun(){
    return mailgun({
        apiKey:process.env.MAILGUN_API_KEY,
        domain:process.env.MAILGUN_DOMAIN
    })
}