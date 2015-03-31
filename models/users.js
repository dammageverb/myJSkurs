var crypto = require ('crypto');
var async = require ('async');
//var HttpError = require('../utils/error').HttpError;
var mongoose = require('../config/mongoose'),
	Schema = mongoose.Schema;
var schema = new Schema ({
	username:{
		type:String,
		unique:true,
		required:true
	},
	hashedPassword:{
		type:String,
		required:true
	},
	salt:{
		type:String,
		required:true
	},
	created:{
		type:Date,
		default:Date.now
	}
});
//-------------------------------------------------------------------------------------------------------
schema.methods.encryptPassword = function(password) {
		return crypto.createHmac ('sha1', this.salt).update(password).digest('hex');
};
//-------------------------------------------------------------------------------------------------------

schema.virtual('password') //создали виртуальную переменную
	.set(function(password) {
		this._plainPassword = password;
		this.salt = Math.random()+' ';
		this.hashedPassword = this.encryptPassword(password);
	})
	.get(function(){return this._plainPassword;});
//-------------------------------------------------------------------------------------------------------
schema.methods.checkPassword = function(password){
	return this.encryptPassword(password) === this.hashedPassword;
};
//-------------------------------------------------------------------------------------------------------
schema.statics.autorize = function(username,password,callback){
	var User = this;

    async.waterfall([
	    function(callback){
		    User.findOne({username:username},callback);
            console.log ('-----------------------------------------------findone is working');
		},
	    function(user,callback){
	        if (user){
		        if(user.checkPassword(password)){
			        callback(null,user);
                    console.log ('-----------------------------------------------Введен true пароль');
		            }
                else{
				callback('mistake',null);
			        // здесь будет обработчик ошибок
			        console.log ('-----------------------------------------------Введен неверный пароль');
                   // callback (new HttpError (403, 'I hate this error'));

                }
	        }
            else{
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
exports.users = mongoose.model('users',schema);