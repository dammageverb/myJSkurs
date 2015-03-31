module.exports = function () {
    var app = require('express');
   // var http = require('http').Server(app);
    var http = require ('http');
    server = http.createServer(app);
    var io = require('socket.io').listen(server);
    server.listen('9999');
    console.log ('----------Server is started on port 9999-----------');

    io.sockets.on('connection', function (socket) {
                console.log('Попытка соединения');
                socket.on('message', function(text, cb) {
            socket.broadcast.emit('message', text);
            cb && cb ();
        });
    });

};
/*module.exports = myserver;

/*
var iz knigi = function (server){

    var io = require (socket.io).listen(server);
    io.set('origins', 'localhost:*');

    io.sockets.on('connection', function (socket) {
        console.log('Попытка соединения');
        socket.on('message', function(text, cb) {
            socket.broadcast.emit('message', text);
            cb && cb ();
        });
    });

};
module.exports = myserver;*/