var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var canvasWidth = canvas.width = Math.min(800, $(window).width() - 20);
var canvasHeight = canvas.height = canvasWidth;
var isMouseDown = false;
var strokeColor = 'black';
var lastLoc = {
    x: 0,
    y: 0
};

$('controller').css('width', canvasWidth + 'px');

canvas.onmousedown = function(e) {
    e.preventDefault();
    beginStroke({
        x: e.clientX,
        y: e.clientY
    });
};
canvas.onmousemove = function(e) {
    e.preventDefault();
    if (isMouseDown) {
        moveStroke({
            x: e.clientX,
            y: e.clientY
        });
    }
};
canvas.onmouseup = function(e) {
    e.preventDefault();
    endStroke();
}
canvas.onmouseout = function(e) {
    e.preventDefault();
    endStroke();
}

canvas.addEventListener('touchstart', function(e) {
    e.preventDefault();
    touch = e.touches[0];
    beginStroke({
        x: touch.pageX,
        y: touch.pageY
    })
})

canvas.addEventListener('touchmove', function(e) {
    e.preventDefault();
    if (isMouseDown) {
        touch = e.touches[0];
        moveStroke({
            x: touch.pageX,
            y: touch.pageY
        });
    }
})

canvas.addEventListener('touchend', function(e) {
    e.preventDefault();
    endStroke();
})

function beginStroke(point) {
    isMouseDown = true;
    lastLoc = windowToCanvas(point.x, point.y);
}

function endStroke() {
    isMouseDown = false;
}

function moveStroke(point) {
    var curLoc = windowToCanvas(point.x, point.y);
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = strokeColor;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.moveTo(lastLoc.x, lastLoc.y);
    ctx.lineTo(curLoc.x, curLoc.y);
    ctx.stroke();
    lastLoc = curLoc;
}

$('#clear_btn').click(function(e) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawBack();
});
$('.color_btn').click(function(e) {
    $('.color_btn').removeClass('color_btn_selected');
    $(this).addClass('color_btn_selected');
    strokeColor = $(this).css('background-color');
})

function windowToCanvas(x, y) {
    var loc = canvas.getBoundingClientRect();
    return {
        x: Math.round(x - loc.left),
        y: Math.round(y - loc.top)
    };
}

drawBack();

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
