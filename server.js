const express = require('express')
const path = require('path')
const router = express.Router()
const app = express()
var PORT = process.env.PORT || 3000

const myModule = require('./auth/lightify')
const req1 = myModule.req

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

router.get('/lights/redirect', (req, res) => {
    res.send(req1)
})

app.use('/', router)
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))