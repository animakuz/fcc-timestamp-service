var http = require('http');
var server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type' : 'text/html'});
    res.end('place timestamp here');
});

server.listen(process.ENV.port, process.ENV.host);

console.log('Server listening on port ' + process.ENV.port);
