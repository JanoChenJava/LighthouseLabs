var socket = io();

$('form').submit(function(){
 var text = $('#initials').val() + " "+ "says" + ":" + $('#message').val();
 socket.emit('message',text);
    $('#message').val('');
 return false;
});

socket.on('message', function(msg){
    var incomingMessage = $('<li>').text(msg);
    $('#messages').append(incomingMessage);
});