var express = require('express');
var port    = 8080;
var app     = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  //send home page
  res.sendFile(__dirname + '/home.html');
});


app.get('/:input', function(req, res) {
  //send response json
  var input  = req.params.input;
  var result = {}; 
  var months = ['January','February','March','April',
                'May','June','July','August','September',
                'October','November','December'];
  var dateTime;

  if ( isNaN(parseInt(input)) ) {
    //Numeric input (valid numbers will be timestamps)
    //Adjust time to UTC for different time zones
    var d    = new Date(input);
    dateTime = new Date( Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) );
  } else {
    //alphanumeric input (valid input will be valid dateTime)
    //offset by 1000 since javascript vounts zero time in milliseconds instead of seconds
    dateTime = new Date(parseInt(input) * 1000);
  } 
  
  if ( isNaN(dateTime.getTime()) ) { 
    result.unix    = null;
    result.natural = null;
  } else {
    //readjust 1000 offset for correct output
    result.unix = dateTime.getTime() / 1000;
    result.natural = months[dateTime.getUTCMonth()] + ' ' + dateTime.getUTCDate() + ', ' + 
                     dateTime.getUTCFullYear();
  }  

  res.json(result);

});


//create server
var server = app.listen(port, function(req, res) {
  console.log('Listening on port ' + port);
});

