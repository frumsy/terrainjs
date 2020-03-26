//var terrain = require(terrain.js);
var express = require('express')
var app = express();
var server = app.listen(3001);
var gs = require('./gameSettings');
app.use(express.static('public'));

console.log('server is running');

var socket = require('socket.io');
var io = socket(server);


var heartRate = 33;
setInterval(heartbeat, heartRate);

function heartbeat(){
    io.sockets.emit('heartbeat', { data: "some data", numberData: 5});
}

io.socket.on('connection', newConnection);

function newConnection(){
    console.log('new connection');
}

var mapX = 1028;
var mapY = 1028;

