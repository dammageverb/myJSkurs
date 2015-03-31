var jsdom = require("jsdom").jsdom;
var doc = new jsdom;
var form = doc.getElementById('chatform');
var input = doc.getElementById('m');
var chatmessages = doc.getElementById('messages');
//var io = require ('socket.io-client');
//var socket = io.connect('http://192.168.0.50:3001');

exports.loadingchat = function (req,res) {
    styles[5]= 'css/chat.css';
    scripts[0] = '/vendor/bower_components/jquery/jquery.js';
    scripts[1] = '/vendor/bower_components/socket.io-client/dist/socket.io.js';

    res.render('chat-old');
    //var socket = io.connect('http://192.168.0.50:3001');

};

exports.msgsend = function(){

   /* form.submit(function(){
        socket.emit('chat message', document.getElementById('m').val());
        input.val('');
        return false;
    });
    socket.emit('chat message', document.getElementById('m').val());
    input.val('');
    //return false;

    socket.on('chat message', function(msg){
        chatmessages.append(document.getElementById('<li>').text(msg));
        form.focus();

    });
    next();*/
};