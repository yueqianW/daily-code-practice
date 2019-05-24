var isMouseDown = false;
var pos = {};
var DEFAULT_COLOR = 'red';
var DEFAULT_WIDTH = 10;
var DEFAULT_BRUSH = 'round';
var DEFAULT_BACKGROUND = '#eee';
var context;

init();

function init() {
    /*获取canvas*/
    var canvas = document.getElementById('canvas');
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    context = canvas.getContext('2d');

    /*设置画布*/
    context.save();
    context.fillStyle = DEFAULT_BACKGROUND;
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.restore();

    /*添加鼠标事件*/
    /*鼠标按下，抬起，移动*/
    /*设置参数判断鼠标事件*/
    /*获取鼠标坐标*/

    document.addEventListener('mousedown', mouseDown, false);
    document.addEventListener('mousemove', mouseMove, false);
    document.addEventListener('mouseup', mouseUp, false);

    setInterval(loop, 1000 / 60);
}


function mouseMove(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
}

function mouseUp(e) {
    isMouseDown = false;
}

function mouseDown(e) {
    isMouseDown = true;
    pos.x = e.clientX;
    pos.y = e.clientY;
}

function loop() {
    if (isMouseDown) {
        draw(context);
    }
}

function draw(ctx) {
    ctx.save();
    ctx.fillStyle = DEFAULT_COLOR;
    // ctx.lineWidth = 5;
    ctx.lineCap = DEFAULT_BRUSH;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, DEFAULT_WIDTH, 0, 2 * Math.PI);
    ctx.fill();
}
