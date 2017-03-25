var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server);

io.on('connection', function (socket){
    socket.on('message', function (msg){
        io.emit('message',msg);
    });
});

server.listen(  '8080', '127.0.0.1', function(){
    var addr = server.address();
    console.log('Chat server running at', addr.address + ":" + addr.port);
});