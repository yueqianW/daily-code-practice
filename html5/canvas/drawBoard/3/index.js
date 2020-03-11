var ctx;
var isMouseDown = false;
var lastX, lastY;

$(function() {
    init();
});

function init() {
    var canvas = document.getElementById('canvas');

    canvas.width = 600;
    canvas.height = 600;
    ctx = canvas.getContext('2d');

    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    $('#canvas').mouseup(function(e) {
        isMouseDown = false;
    });

    $('#canvas').mousedown(function(e) {
        isMouseDown = true;
        draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#canvas').mousemove(function(e) {
        if (isMouseDown) {
            draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });
}

function draw(x, y, isDown) {
    if (isDown) {
        ctx.save();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#f00';
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x;
    lastY = y;
}