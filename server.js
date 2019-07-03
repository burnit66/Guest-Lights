const express = require('express')
const path = require('path')
const router = express.Router()
const app = express()
var PORT = process.env.PORT || 3000

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.use('/', router)
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
