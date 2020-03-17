var canvas = document.getElementById('canvas');

var canvasWidth = canvas.width = window.innerWidth;
var canvasHeight = canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

context.fillStyle = "#000";
context.fillRect(0, 0, canvasWidth, canvasHeight);

for (var i = 0; i < 150; i++) {
    context.fillStyle = randomColor();
    var x = canvasWidth * Math.random();
    var y = canvasHeight * Math.random();
    var lineWidth = (Math.random() + 1) * 2;
    drawStar();
}

function randomColor() {
    return '#' +
        (function(color) {
            return (color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) && (color.length == 6) ? color : arguments.callee(color);
        })('');
}

function drawStar() {
    context.beginPath();
    context.moveTo(x, y);
    context.arc(x, y, lineWidth, 0, 2 * Math.PI);
    context.fill();
}
