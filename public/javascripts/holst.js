var canvas, grad, radians, size, img;
function initiate () {
	var elem = document.getElementById('canvas');
	canvas = elem.getContext('2d');
	//������� �������� + ��������
	/*canvas.strokeStyle = '#000099';
	canvas.fillStyle = '#990000';
	grad = canvas.createLinearGradient (0, 0, 500, 500);
	grad.addColorStop (0.2, '#00AAFF');
	grad.addColorStop (1, '#000000');
	canvas.fillStyle = grad;
	//canvas.strokeRect(100, 100, 120, 120);
	canvas.fillRect(10, 10, 100, 100);
	canvas.fillRect(150, 10, 200, 100);
	canvas.clearRect (120, 120, 80, 80);

	//����
	grad = canvas.createLinearGradient (0, 0, 500, 500);
	grad.addColorStop (0.2, '#00AAFF');
	grad.addColorStop (1, '#000000');
	canvas.fillStyle = grad;
	*/


	/*
	//�����
	grad = canvas.createLinearGradient (0, 0, 500, 500);
	grad.addColorStop (0.2, '#00AAFF');
	grad.addColorStop (1, '#000000');
	canvas.fillStyle = grad;
	canvas.save();
	canvas.beginPath();
	canvas.moveTo(100, 100);
	canvas.lineTo(200, 200);
	canvas.lineTo(100, 200);
	//canvas.closePath();
	//canvas.fill();
	canvas.beginPath();
	for (var f = 0; f < 300; f = f + 10) {
		canvas.moveTo (0,f);
		canvas.lineTo (500, f);
	};
	canvas.stroke();
	canvas.restore();
		canvas.beginPath();
	canvas.moveTo(100, 100);
	canvas.lineTo(200, 200);
	canvas.lineTo(100, 200);
	canvas.closePath();
	canvas.fill();
	canvas.restore();
	*/
	/*
	grad = canvas.createLinearGradient (0, 0, 500, 500);
	grad.addColorStop (0.2, '#00AAFF');
	grad.addColorStop (1, '#000000');
	canvas.fillStyle = grad;
	canvas.lineWidth = 10;
	canvas.lineCap = "round";
	canvas.save();
	canvas.beginPath();
	canvas.arc (100, 100, 50, 0, Math.PI*2, false);
	canvas.stroke();
	canvas.closePath();
	canvas.restore();

	canvas.beginPath();
	radians = Math.PI/180*45;
	canvas.arc (200, 200, 100, 0, radians, false);
	canvas.stroke();

	canvas.lineWidth = 10;
	canvas.lineCap = "round";

	canvas.closePath();
	canvas.restore();
	*/
	/* �����
	size = canvas.measureText('Hello world');
	canvas.font = 'bold 24px veranda, sans-serif';
	canvas.textAlign = 'start';
	canvas.textBaseLine = 'bottom';
	canvas.fillText('Hello world', 100, 124);

	canvas.strokeRect (100,100, size.width, 24);
	*/

	//����
	/*
	size = canvas.measureText('Hello world');
	canvas.font = 'bold 24px veranda, sans-serif';
	canvas.textAlign = 'start';
	canvas.textBaseLine = 'bottom';

	canvas.shadowColor = 'rgba(0, 0, 0, 0.5)';
	canvas.shadowOffsetX = 4;
	canvas.shadowOffsetY = 4;
	canvas.shadowBlur = 5;

	canvas.fillText('Hello world', 100, 124);

	//canvas.strokeRect (100,100, size.width, 24);
	*/

	//pictures
	
	img = document.createElement('img');
	img.setAttribute ('src', 'images/ttt.jpg');
	img.addEventListener ('load', function() {
		canvas.drawImage(img, 0, 0, elem.width, elem.height)
		var pattern = canvas.createPattern (img, 'repeat');
		canvas.fillStyle = pattern;
		canvas.fillRect (0,0,500,300);
	})
	
	/*function modimage () {
		var pattern = canvas.createPattern (img, 'repeat');
		canvas.fillStyle = pattern;
		canvas.fillRect (0,0,500,300);
		
	}
	
	
	*/
	}
	
	
	
	
addEventListener ('load', initiate); 