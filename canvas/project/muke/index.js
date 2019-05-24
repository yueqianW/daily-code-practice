var ctx = document.getElementById('canvas').getContext('2d');

var width = ctx.canvas.width;
var height = ctx.canvas.height;
var r = width / 2;

drawBack();
drawHour(5, 30);
drawMin(45);
drawSec(10);
drawDot();

function drawBack() {
    ctx.translate(r, r);
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(0, 0, r - 5, 0, 2 * Math.PI);
    ctx.stroke();

    var hourNum = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    hourNum.forEach(function(num, i) {
        ctx.font = "18px Arial";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        var rad = 2 * Math.PI / 12 * i;
        var x = Math.cos(rad) * (r - 30);
        var y = Math.sin(rad) * (r - 30);

        ctx.fillText(num, x, y);
    });

    for (var i = 0; i < 60; i++) {
        var rad = 2 * Math.PI / 60 * i;
        var x = Math.cos(rad) * (r - 16);
        var y = Math.sin(rad) * (r - 16);
        ctx.beginPath();
        if (i % 5 == 0) {
            ctx.fillStyle = '#000';
            ctx.arc(x, y, 2, 0, 2 * Math.PI);
        } else {
            ctx.fillStyle = '#ccc';
            ctx.arc(x, y, 2, 0, 2 * Math.PI);
        }
        ctx.fill();
    }
}

function drawHour(hour, min) {
    ctx.save();
    ctx.beginPath();
    var rad = 2 * Math.PI / 12 * hour;
    var mrad = 2 * Math.PI / 12 / 60 * min;
    ctx.rotate(rad + mrad);
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 10);
    ctx.lineTo(0, -r / 2);
    ctx.stroke();
    ctx.restore();
}

function drawMin(min) {
    ctx.save();
    var rad = 2 * Math.PI / 60 * min;
    ctx.rotate(rad);
    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.lineWidth = 4;
    ctx.moveTo(0, 10);
    ctx.lineTo(0, -r + 50);
    ctx.stroke();
    ctx.restore();
}

function drawSec(sec) {
    ctx.save();
    ctx.beginPath();
    var rad = 2 * Math.PI / 60 * sec;
    ctx.rotate(rad);
    ctx.strokeStyle = '#f00';
    ctx.lineWidth = 2;
    ctx.moveTo(0, 10);
    ctx.lineTo(0, -r + 35);
    ctx.stroke();
    ctx.restore();
}

function drawDot() {
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.arc(0, 0, 3, 0, 2 * Math.PI);
    ctx.fill();
}
