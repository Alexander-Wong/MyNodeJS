var http = require('http');

function onRequest(request,response){
    console.log('client request', request.url);
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.statusCode = 200;
    response.write('Server response');
    response.end();

}

http.createServer(onRequest).listen(8888);
console.log('server is up');
