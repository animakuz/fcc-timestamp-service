var http = require('http');
var port = 8080;
var host = '127.0.0.1';

var server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type' : 'text/html'});
    res.end('place timestamp here');
});

server.listen(port, host);

console.log('Server listening on port ' + port); 
