require('dotenv').config()
const https = require('https')

const options = {
    'method': 'GET',
    'hostname': 'https://na.lightify-api.com/oauth2',
    'path': '/authorize?client_id=' + process.env.CLIENT_ID + '&state=12345&redirect_uri=' + process.env.REDIRECT_URI + '&response_type=code',
    'headers': {
    }
}

const req = https.request(options.hostname + options.path, function (res) {
    const chunks = []

    res.on("data", function (chunk) {
        chunks.push(chunk)
        console.log(chunks)
    })

    res.on("end", function (chunk) {
        const body = Buffer.concat(chunks)
        console.log(body.toString())
    })

    res.on("error", function (error) {
        console.error(error)
    })
})

req.end()

module.exports.req = req