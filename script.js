var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

var button = document.querySelector('button');

function setGradient() {
	body.style.background =
		'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
	css.textContent = body.style.background + ';';
}

function toHexString(number) {
	var hexString = number.toString(16);
	if (hexString.length % 2) {
		hexString = '0' + hexString;
	}
	return hexString;
}

function randomColors() {
	var Random1 = Math.round(Math.random() * 255);
	var Random2 = Math.round(Math.random() * 255);
	var Random3 = Math.round(Math.random() * 255);
	var Random4 = Math.round(Math.random() * 255);
	var Random5 = Math.round(Math.random() * 255);
	var Random6 = Math.round(Math.random() * 255);
	console.log(Random1, Random2, Random3, Random4, Random5, Random6);

	body.style.background =
		'linear-gradient(to right, rgb(' +
		Random1 +
		', ' +
		Random2 +
		', ' +
		Random3 +
		'), rgb(' +
		Random4 +
		', ' +
		Random5 +
		', ' +
		Random6 +
		'))';
	css.textContent = body.style.background + ';';

	color1.value =
		'#' +
		toHexString(Random1) +
		toHexString(Random2) +
		toHexString(Random3);

	color2.value =
		'#' +
		toHexString(Random4) +
		toHexString(Random5) +
		toHexString(Random6);
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
button.addEventListener('click', randomColors);
