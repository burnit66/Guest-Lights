const https = require('https')

const options = {
    'method': 'GET',
    'hostname': 'na.lightify-api.com/oauth2',
    //INTO PATH /authorize?client_id=&state={{state}}&redirect_uri=http://your.server.com/&response_type=code
    'path': '',
    'headers': {
    }
  }
  
  const req = https.request(options, function (res) {
      const chunks = []
  
      res.on("data", function (chunk) {
          chunks.push(chunk)
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