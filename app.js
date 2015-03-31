//подключаем глобальный модуль экспрес, и другие модули
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//подключаем конфигу (по умолчанию подключится индекс.js, т.е. таким образом через переменную config мы получаем доступ к файлу config/index.js - к нашей конфиге
var config = require ('./config');

var routes = require('./routes/index');
var users = require('./routes/users');
//переменная для галереи
var galary = require('./routes/galary');
//переменные для логина
var reg = require ('./routes/reg');
//session
var session = require ('cookie-session');
//авторизация
var checkAuth = require ('./utils/checkauth'); //подключаем обработчик проверки авторизации
var auth = require ('./routes/auth');
//video
var video = require ('./routes/video');
//holst
var holst = require ('./routes/holst');
//chat
//var chat_old = require('./routes/chat_old');//4 test
var chat = require ('./routes/chat'); //working chat

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});

http.listen(3001, function(){
    console.log('-----------------listening on for chat :3001');
});



// view engine setup 1 - подключается папка с шаблонами, 2 - какой шаблонизатор будем использовать
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public

scripts = config.get ('scripts');
styles = config.get('styles');

app.use(session({secret:config.get('session:secret')})); 
//глобальная переменная для определения залогинен или нет

app.use(function (req, res, next) {
	res.locals = {
		userid: req.session.user,
        usernickname:''
	};
	next ();
});


//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




//app.use(session);

//прослушиватели 1 - главная страница, 2 - подключается контроллер users.js

app.get('/', routes.index);
app.get ('/video', video.videoloading);
app.get ('/canva', holst.holstloading);
app.get ('/chat', checkAuth, chat.loadingchat);
//app.get ('/chat-old', checkAuth, chat_old.loadingchat);
app.get('/userpage', checkAuth, auth.userpage);
app.get('/logout', checkAuth, reg.logout);
app.use('/users', users);
app.get('/addinfo', routes.add);
app.get('/reg', reg.index);
app.get('/galary', galary.out);
//дефолтный гет (прослушиватель) - все что пользователь вводит в адресную строку (кроме юзерс)
app.get('/:id', routes.index);
//post прослушки
app.post('/reg', reg.recent);
//app.post ('/chat', chat.msgsend);
//app.post ('/chat-old', chat_old.msgsend);






// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



// error handlers

// development error handler
// will print stacktrace
//
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//добавляем прослушиватели: после подключения конфига, port - переменная описанная в жсоне config.json
app.listen(config.get('port'));

//все из переменной арр попадает в модуль экспортс
module.exports = app;

