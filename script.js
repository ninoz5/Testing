var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function displayColorInput(){
	css.textContent = body.style.background + ";";
}
function changeColor(){
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ ", "
	+ color2.value
	+ ")";
	displayColorInput();
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);