require('dotenv').config()
const passport = require('passport')
const OAuthStrategy = require('passport-oauth2')

passport.use(
    new OAuthStrategy ({
        callbackURL: process.env.REDIRECT_URI,
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        authorizationURL: 'https://guest-lights.herokuapp.com/',
        tokenURL: 'https://guest-lights.herokuapp.com/'
    }, () => {
        //passport callback
    })
)