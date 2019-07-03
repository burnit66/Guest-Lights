const express = require('express')
const path = require('path')
const router = express.Router()
const app = express()
var PORT = process.env.PORT || 3000

const myModule = require('./auth/lightify')
const options = myModule.options

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

router.get('/auth/lights', (req, res) => {
    res.statusCode = 302;
    res.setHeader('Location', options.hostname + options.path);
    res.end();
})

app.use('/', router)
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))