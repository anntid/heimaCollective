var button = document.getElementById('hover');
var body = document.body;

button.onmouseover = function happyBackground() {
	body.className = 'hovered';
}

button.onmouseout = function() {
	body.className = '';
}