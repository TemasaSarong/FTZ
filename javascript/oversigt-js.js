//JavaScript code inspired by: 
//https://stackoverflow.com/questions/36184252/javascript-only-li-text-slider


var current = 4,
	slides = document.getElementsByClassName("slideText");

setInterval(function() {
	for (var i = 0; i < slides.length; i++) {
	slides[i].style.opacity = 0;
	}
	current = (current != slides.length - 1) ? current + 1 : 0;
	slides[current].style.opacity = 1;
}, 2000);


