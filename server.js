var https = require('https');

var options = {
  'method': 'GET',
  'hostname': 'na.lightify-api.com/oauth2',
  // /authorize?client_id=&state={{state}}&redirect_uri=http://your.server.com/&response_type=code
  'path': '',
  'headers': {
  }
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();