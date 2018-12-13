var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

function setGradient() {
	body.style.background =
		'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
	css.textContent = body.style.background + ';';
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

var button = document.querySelector('button');

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
	color1.value = 'rgb(' + Random1 + ', ' + Random2 + ', ' + Random3 + ')';
	color2.value = 'rgb(' + Random4 + ', ' + Random5 + ', ' + Random6 + ')';
}

button.addEventListener('click', randomColors);