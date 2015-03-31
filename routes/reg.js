 var User = require ('../models/users').users;
 //var HTTPError = require('node-http-error').HTTPError;
 var HttpError = require('../utils/error').HttpError;
 //var AuthError = require ('../');
//описываем метод, вызываемый при переходе на страницу	
	
exports.index = function (req,res) {
    styles[3]='css/login.css';
	res.render('register');
    styles.splice(3, 1);
 //   scripts.splice(5, 1);


};
//-------------------------------------------------------------------------------------------------------
//получение данных введеных в поля логина и пароля

exports.recent = function (req,res,next) {
	var username = req.body.username;
	var password = req.body.password;
	var session = require ('cookie-session');
	console.log ('name: '+username+' pass: '+password);
	
User.autorize(username, password, function (err, user)
				{
					/*if (err){
						if (err instanceof HttpError) {
						//return next (new HttpError(403, err.message));
                            return next (new HttpError(403, 'fuck fuck fuck'));
						} else {
						return next(err);
						}
						}*/
						if (err) {res.redirect('/reg')
						return;
						}
						
					req.session.user = user._id;
					console.log('user ID: ' + req.session.user);
                    usernickname = username;//тестовая глобалка для ника в чате
					res.redirect('userpage');
				});

	
	
	
};


exports.logout = function (req, res) {
	req.session = null;
	res.redirect ('/reg');
}