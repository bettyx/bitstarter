var express = require('express');

var app = express.createServer(express.logger());

var ordet = fs.readFileSync('index.html',str);


app.get('/', function(request, response) {
  response.send(ordet));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
