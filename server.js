var express = require('express');
var port = 8080;
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  //send home page
  res.sendFile(__dirname + '/home.html');
});


app.get('/:text', function(req, res) {
  //send response json
  //test 
  var result = {
    "input"   : req.params.text, 
    "unix"    : "0",
    "natural" : "January 1, 1970"
  };
  res.json(result);
});


//create server
var server = app.listen(port, function(req, res) {
  console.log('Listening on port ' + port);
});

