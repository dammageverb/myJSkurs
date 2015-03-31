	//Страница пользователя
exports.userpage = function (req,res) {
    styles[4]='css/userpage.css';
	res.render('userpage');
    styles.splice(4, 1);
    //scripts.splice(5, 1);

};
//-------------------------------------------------------------------------------------------------------
