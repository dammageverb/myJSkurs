exports.holstloading = function(req, res) {
	styles[7] = 'css/holst.css';
	scripts[6] = 'javascripts/holst.js';
	res.render ('holst');
    styles.splice(7, 1);
    scripts.splice(6, 1);
};