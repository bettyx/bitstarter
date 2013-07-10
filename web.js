var express = require('express');

var app = express.createServer(express.logger());

var strang = fs.readFileSync(index.html);
strang = buf.toString(strang);

app.get('/', function(request, response) {
  response.send();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
