


exports.loadingchat = function (req, res) {
    //config = require ('../config');
    //scripts = config.get("scripts");
    scripts[2] = '/vendor/bower_components/jquery/jquery.js';
    scripts[3] = '/vendor/bower_components/socket.io-client/dist/socket.io.js';
    scripts[4] = 'javascripts/chat.js';
    styles[5]= 'css/chat.css';

    res.render ('chat', {scripts:scripts});
    //var socket = io.connect('http://192.168.0.50:3001');
    styles.splice(5, 1);
    scripts.splice(2, 3);

};
/*
exports.msgsend = function(req, res, next){

    form.submit(function(){
        socket.emit('chat message', document.getElementById('m').val());
        input.val('');
        return false;
    });
    socket.on('chat message', function(msg){
        chatmessages.append(document.getElementById('<li>').text(msg));
        form.focus();

    });
    next();
};
*/