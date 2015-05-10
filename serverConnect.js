var connect = require('connect');
var http = require('http');

var app= connect();

app.use('/index', function index(req, res, next) {
    res.end('index');
});

app.use('/foo', function foo(req, res, next) {
    res.end('foo');
});

app.use('/movie', function movie(req, res, next) {
    res.end('movie');
});

app.use(function onerror(err, req, res, next) {
    res.end('error');
});

http.createServer(app).listen(8888);
console.log('server connect is up');