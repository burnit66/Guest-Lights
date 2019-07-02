const express = require('express')
const path = require('path')
const router = express.Router()
const app = express()
const port = 3000

router.get('/',(req,res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.use('/', router)
app.listen(port, () => console.log(`App listening on port ${port}!`))
