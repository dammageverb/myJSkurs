var maxim, mmedia, play, bar, progress, mute, volume, loop;
function initiate () {
	maxim = 400;
	mmedia = document.getElementById ('media');
	play = document.getElementById ('play');
	bar = document.getElementById ('bar');
	progress = document.getElementById ('progress');
	mute = document.getElementById ('mute');
	volume = document.getElementById ('volume');
		
	play.addEventListener ('click', push);
	mute.addEventListener ('click', sound);
	bar.addEventListener ('click', moove);
	volume.addEventListener ('change', level);
	
	}
addEventListener ('load', initiate); //скрипт подгружается только после загрузки страницы - аналог bind в jquery


function push () {
	console.log ('pushme staring');
	if (!mmedia.paused && !mmedia.ended) {
		mmedia.pause();
		play.value = 'Play';
		clearInterval (loop);
		
	} 
	else {
		mmedia.play();
		play.value = 'Pause';
		loop = setInterval (status, 1000);
	}
}

function status () {
	if (!mmedia.ended) {
		var size = parseInt(mmedia.currentTime * maxim / mmedia.duration); //в пикселях
		progress.style.width = size + 'px';
		
	}
	else {
		progress.style.width = '0px';
		play.innerHTML = 'Play';
		clearInterval(loop);
	}

}



function sound () {
	console.log ('sound');
	if (mute.value == 'Mute') {
		mmedia.muted = true;
		mute.value = 'Sound';	
	}
	else {
		mmedia.muted = false;
		mute.value = 'Mute';
	}
	
}
//
function moove (e) {
	console.log (e);
	e.preventDefault
	if (!mmedia.paused && !mmedia.ended) {
		var mouseX = e.pageX - bar.offsetLeft-$('.col-md-8').offset().left; //расстояние от края браузера до места куда тыкнули мышью - расстояние от края браузера до края самого статус бара
		var newtime = mouseX * mmedia.duration / maxim; //
		mmedia.currentTime = newtime; //задать текущее значение время воспроизведения на наше!
		progress.style.width = mouseX+ 'px';
	}


	console.log ('moove');
}

function level () {
	mmedia.volume = volume.value;

}








