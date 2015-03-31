//var HttpError = require ('../utils/error').HttpError;

module.exports = function (req, res, next) {
console.log('проверка чекаут: '+req.session.user);
if (!req.session.user) {
	res.redirect ('/reg');
}
next();

}