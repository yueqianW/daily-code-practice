var canvas = document.getElementById('canvas');
var ctx    = canvas.getContext('2d');

var canvasWidth = canvas.width = 500;
var canvasHeight = canvas.height = canvasWidth;
var isMouseDown = false;
var lastLoc     = {x: 0, y: 0};

// $('#lineWidth').find(':selected').val();          //13
var line_Width = $('#lineWidth').get(index).value;


drawBack();

canvas.onmousedown = function (e) {
    e.preventDefault();
    isMouseDown = true;
    lastLoc     = windowToCanvas(e.clientX, e.clientY);
};
canvas.onmousemove = function (e) {
    e.preventDefault();
    if (isMouseDown) {
        var curLoc = windowToCanvas(e.clientX, e.clientY);
        ctx.beginPath();
        ctx.lineWidth = line_Width;
        ctx.lineCap   = 'round';
        ctx.lineJoin  = 'round';
        ctx.moveTo(lastLoc.x, lastLoc.y);
        ctx.lineTo(curLoc.x, curLoc.y);
        ctx.stroke();
        lastLoc = curLoc;
    }
};
canvas.onmouseup   = function (e) {
    e.preventDefault();
    isMouseDown = false;

};
canvas.onmouseout  = function (e) {
    e.preventDefault();
    isMouseDown = false;

};

$('#clear_btn').click(function (e) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawBack();
});

function windowToCanvas(x, y) {
    var loc = canvas.getBoundingClientRect();
    return {x: Math.round(x - loc.left), y: Math.round(y - loc.top)};
}

function drawBack() {
    ctx.save();
    ctx.strokeStyle = '#f00';

    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.moveTo(3, 3);
    ctx.lineTo(canvasWidth - 3, 3);
    ctx.lineTo(canvasWidth - 3, canvasHeight - 3);
    ctx.lineTo(3, canvasHeight - 3);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(0, 0);
    ctx.lineTo(canvasWidth, canvasHeight);

    ctx.moveTo(canvasWidth, 0);
    ctx.lineTo(0, canvasHeight);

    ctx.moveTo(canvasWidth / 2, 0);
    ctx.lineTo(canvasWidth / 2, canvasHeight);

    ctx.moveTo(0, canvasHeight / 2);
    ctx.lineTo(canvasWidth, canvasHeight / 2);
    ctx.stroke();
    ctx.restore();
}

