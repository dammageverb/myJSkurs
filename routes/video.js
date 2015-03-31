exports.videoloading = function(req, res) {
	styles[6] = 'css/video.css';
	scripts[5] = 'javascripts/video.js';
	res.render ('video');
    styles.splice(6, 1);
    scripts.splice(5, 1);

};