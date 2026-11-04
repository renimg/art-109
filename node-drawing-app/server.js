var express = require('express');
var socket = require('socket.io');
var app = express();
var io = socket(server);
var server = app.listen(3000);

app.use(express.static('public'));


console.log("hello world");
io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log('new connection');
    console.log(socket);
}