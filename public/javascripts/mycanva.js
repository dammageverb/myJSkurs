//dmmg
var canvas1, grad, size, img;
function initiate () {
	var elem = document.getElementById('topcanvas');
	canvas1 = elem.getContext('2d');
	
	addEventListener ('mousemove', animation);
	
   		}
	
	function animation (e) {
        grad = canvas1.createLinearGradient (0, 0, 500, 500);
        grad.addColorStop (0.2, '#00AAFF');
        grad.addColorStop (1, '#000000');
        canvas1.fillStyle = grad;

        img = document.createElement('img');
        img.setAttribute ('src', 'images/logo5.png');
        img.addEventListener ('load', function() {
            var elem = document.getElementById('topcanvas');
            canvas1.drawImage(img, 0, 0, elem.width, elem.height)
        });

		var xMouse = e.clientX;
		var yMouse = e.clientY;
		var xCenter = 120;
		var yCenter = 50;
		var arg = Math.atan2(yMouse-yCenter,xMouse-yCenter);
		var x = xCenter + Math.round(Math.cos(arg)*10);
		var y = yCenter + Math.round(Math.sin(arg)*10);
		canvas1.clearRect( 0, 0, 500, 200);
		canvas1.beginPath();
		canvas1.arc( xCenter, yCenter, 20, 0, Math.PI * 2 ,false);
		canvas1.moveTo( xCenter + 70, yCenter);
		canvas1.arc( xCenter + 50, yCenter, 20, 0, Math.PI * 2 ,false);
		canvas1.fill();

        grad = canvas1.createLinearGradient (0, 0, 500, 500);
        grad.addColorStop (0.2, '#000000');
        grad.addColorStop (1, '#000000');
        canvas1.fillStyle = grad;
		canvas1.beginPath();
		canvas1.moveTo( x + 10, y);
		canvas1.arc( x, y, 10, 0, Math.PI * 2 ,false);
		canvas1.moveTo( x + 60, y);
		canvas1.arc( x + 50, y, 10, 0, Math.PI * 2 ,false);
		canvas1.fill();


	}

addEventListener ('load', initiate); 







