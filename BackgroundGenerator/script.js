var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randobtn = document.getElementById("randobtn");
var randomContainer = document.getElementById('random');

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomize() {
	{
	var randomColor = [
		'#'+Math.floor(Math.random()*16777215).toString(16),
		'#'+Math.floor(Math.random()*16777215).toString(16)
		];
    randomContainer.textContent = randomColor[0] + " , " + randomColor[1];
	
    color1.value = randomColor[0];
    color2.value = randomColor[1];
    setGradient();

    return randomColor;
}
}

window.addEventListener('load', setGradient);

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

randobtn.addEventListener('click', randomize);

