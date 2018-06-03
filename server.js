var http = require('http');
var porta = 3000;
var ip = 'localhost';

http.createServer(function(request, response){
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.end('<html><body>Request recebido!</body></html>');
}).listen(porta, ip);

console.log("Server running at http://" + ip + ":" + porta + "/");