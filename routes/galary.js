/*exports.index = function(req,res){
if(req.params.id){
var index = req.params.id;
}
else{
var index = 'index';
}

	var config=require ('../config');
	scripts = config.get ('scripts');
	scripts[0]='script4galary.css';
	styles[2]='style4galary.css';
	
//описываем метод, вызываемый при переходе на страницу	
*/	
exports.out = function (req,res) {
	var config=require ('../config');
	scripts = config.get ('scripts'); //- эта строка подкллючает из конфига, ниже строки определяются напрямую к файлам
	//scripts[0]='script4galary.js';
	styles[2]='css/galary.css';
	res.render('galary');
    styles.splice(2, 1);
    //scripts.splice(5, 1);
   // styles=config.get('styles');
  // styles[2]='';
}
