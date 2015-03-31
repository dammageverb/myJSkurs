//файлик для модели запись в бд юзеров и пассов
var crypto = require ('crypto'); //создали переменную для работы с модулем криптографии
var mongoose = require ('../config/mongoose'); //подключаем модуль мангуса
var Schema = mongoose.Schema; //подключаем какую то схему мангуса
var async = require ('async');
//потом подключаем переменную для создания нашей схемы
var schema = new Schema({
	username: {type:String, unique:true, required:true},
	hashedPassword: {type:String, required:true},
	salt: {type: String, required:true},
	created: {type:Date, default: Date.now}
	
});

schema.methods.encryptPassword = function (password) {

return crypto.createHmac ('sha1', this.salt).update(password).digest('hex');

};

schema.virtual('password')
	.set (function(password){
		this._plainPassword = password;
		this.salt= Math.random()+' ';
		this.hashedPassword = this.encryptPassword(password);
	})
	.get(function() {return this._plainPassword;});
/*
schema.statics.autorize = function (username, password, callback){
var User = this;

async.waterfall ([
	function(callback) {
	User.findOne({username: username},callback);
},
	function (user, callback) {
	if (user) {
		if (user.checkPassword(password)){
				callback(null, user);
		} else {
			//пока пусто
		}
	}else {

	{var user = new User ({username: username, password: password}); user.save(function(err) {if (err) return callback(err);callback(null,user);})}
	}

], callback);

};

	
*/	
schema.methods.checkPassword = function(password){
	return this.encryptPassword(password) === this.hashedPassword;


schema.statics.autorize = function(username,password,callback){
	var User = this;
	async.waterfall([
	function(callback){
		User.findOne({username:username},callback);
		},
	function(user,callback){
	if (user){
		if(user.checkPassword(password)){
			callback(null,user);
		} else{
			// здесь будет обработчик ошибок
		}
	} else{
	var user = new User({
	username:username,password:password
	});
	user.save(function(err){
	if (err) return callback(err);
	callback(null,user);
	});
	}
	}
	],callback);
};



exports.users = mongoose.model ('users', schema);
