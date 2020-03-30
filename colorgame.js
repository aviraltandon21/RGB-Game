 var colors = generaterandomcolors(6);

var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");

colordisplay.textContent = pickedcolor;
resetbutton.addEventListener("click", function(){
	colors = generaterandomcolors(6);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
})

for(var i=0; i<squares.length; i++){
squares[i].style.backgroundColor = colors[i];

squares[i].addEventListener("click",function(){

	var clickedcolor = this.style.backgroundColor;
	if(clickedcolor === pickedcolor)
	{

		messagedisplay.textContent = "correct";
		resetbutton.textContent = "Play Again?";
		changecolors(clickedcolor);
		h1.style.backgroundColor = clickedcolor;
		
	}
	else {
		this.style.backgroundColor = "#232323";
		messagedisplay.textContent = "try again";
	}
});
} 

function changecolors(color){

for(var i=0; i<squares.length; i++)
{
	squares[i].style.backgroundColor = color;
}
}

function pickcolor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generaterandomcolors(num) {
var arr = []
for(var i=0; i<num; i++)
{
  arr.push(randomcolor());
}

return arr;

}

function randomcolor() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}