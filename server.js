const express = require('express')
const path = require('path')
const router = express.Router()
const app = express()
const passport = require('passport')
const passportSetup = require('./config/passport-setup')
var PORT = process.env.PORT || 3000

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

router.get('/auth/lights', passport.authenticate('oauth', {
    scope: []
}))

app.use('/', router)
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
