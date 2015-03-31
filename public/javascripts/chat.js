$(function () {
    var nickname;
    var oldnick = 'newuser';
    $('#m').attr('disabled', 'false');
    $('#m').attr('placeholder', 'Для начала общения введите ник');
    var socket = io.connect('localhost:3001');

    //$('#messages').append($('<li class="systemmessage">').text(socket.index));
    $('#messages').append($('<li class="systemmessage">').text('Подключился новый пользователь'));
    $('form').submit(function () {
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('chat message', function (msg) {
        if (msg != '') {
            var fullmsg = nickname + ': ' + msg;
            $('#messages').append($('<li class="usermessages">').text(fullmsg));
        }
    });


    //
    $('#accnickbtn').click(function () {
        if ($('#accnick').val() != '') {
            if (oldnick == 'newuser') {
                nickname = $('#accnick').val();
                $('#messages').append($('<li class="systemmessage">').text(oldnick + ' сменил имя на: ' + nickname));
                //смена атрибутов--------------------
                $('#accnick').attr('disabled', '0');
                $('#m').removeAttr('disabled');
                $('#m').removeAttr('placeholder');
                oldnick = nickname;
            }
            else {
                oldnick = nickname;
                nickname = $('#accnick').val();
                $('#messages').append($('<li class="systemmessage">').text(oldnick + ' сменил имя на: ' + nickname));
                //смена атрибутов--------------------
                $('#accnick').attr('disabled', '0');
                $('#m').removeAttr('disabled');
                $('#m').removeAttr('placeholder');

            }
        }
    });

    $('#ncancel').click(function () {
        $('#m').attr('disabled', 'false');
        $('#accnick').removeAttr('disabled');
    });


});








