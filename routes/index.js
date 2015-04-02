exports.index = function(req,res){
//console.log(req.session.user);
    var index;
if(req.params.id){
index = req.params.id;
}
else{
index = 'index';
}
    var config = require ('../config');

var Maintexts = require('../models/maintexts').maintexts;
Maintexts.findOne({'url':index},function(err,text){
console.log (text);

    if(!text){
        console.log('zna4enie dlia text: '+ text);
		text = {
		name:'Добро пожаловать на сайт',
		body:'Извините страница не найдена'

			}
		}


    res.render ('index',{text:text});


});
};

exports.add = function (req,res){
var Maintexts = require ('../models/maintexts').maintexts; //.maintexts переменная из maintexts.js
var maintexts = new Maintexts ({
'name':'Итоги занятий',
'body':'Подведем итоги наших занятий',// экшен для добавления информации в базу данных монго
'url':'whatlearn'
});
maintexts.save(function(){
console.log('Ok');
});

res.redirect('/'); //перенаправление, любая обработка форм заканчиватся перенаправлением
};