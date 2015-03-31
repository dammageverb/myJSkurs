//файлик для модели главная-текст
var mongoose = require ('../config/mongoose'); //создали переменную для работы с модулем
var Schema = mongoose.Schema; //подключаем какую то схему мангуса

//потом подключаем переменную для создания нашей схемы
var schema = new Schema({
	name: {type:String, unique:true, required:true},
	body: {type: String},
	url: {type: String, unique:true, required:true}

});

exports.maintexts = mongoose.model ('maintexts', schema);
//где maintexts - переменная, к которой нужно обратиться, что бы создать схему мэинтекст