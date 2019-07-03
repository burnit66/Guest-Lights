require('dotenv').config()
const passport = require('passport')
const OauthStrategy = require('passport-oauth')

passport.use(
    new OauthStrategy ({
        callbackURL: process.env.REDIRECT_URI,
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    }, () => {
        //passport callback
    })
)