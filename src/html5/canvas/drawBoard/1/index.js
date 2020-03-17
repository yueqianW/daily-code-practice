var DEFAULT_BRUSH_SIZE = 5; //设置默认的画笔大小
var DEFAULT_BRUSH_COLOR = "#000"; //画笔颜色
var BACKGROUND_COLOR = "#fff"; //设置画布的背景颜色
var isMouseDown; //记录鼠标是否已经按下
var pos = {}; //记录画笔的位置
var next_pos = {}; //记录下一点画笔位置
var context; //context上下文

function init() {
    canvas = document.getElementById('canvas'); //根据ID获取画布
    var canvasWidth = canvas.width = window.innerWidth; //获取画布宽度
    var canvasHeight = canvas.height = window.innerHeight; //获取画布高度
    context = canvas.getContext('2d'); //获取画布上下文

    context.fillStyle = BACKGROUND_COLOR; //设置背景填充颜色
    context.fillRect(0, 0, canvasWidth, canvasHeight); //填充画布背景

    document.addEventListener('mousemove', mouseMove, false); //监听鼠标移动事件
    document.addEventListener('mousedown', mouseDown, false); //监听鼠标点击事件
    document.addEventListener('mouseup', mouseUp, false); //监听鼠标释放事件

    setInterval(loop, 1000 / 60); //设置监听事件间隔
}

function mouseMove(e) {
    pos = setPos(e.clientX, e.clientY);

    if (isMouseDown)
        draw(context);
}

function setPos(pointx, pointy) {
    var n_pos = {};
    n_pos.x = pointx;
    n_pos.y = pointy;
    return n_pos;
}

function mouseDown(e) {
    isMouseDown = true;
    draw(context);
}

function mouseUp(e) {
    isMouseDown = false;
}

function loop(e) {
    update(pos);
    //绘制鼠标点击位置
}

function update(up_point) {
    if (!next_pos) {
        next_pos = setPos(0, 0);
    } else {
        next_pos = setPos(up_point.x, up_point.y);
    }
}

function draw(ctx) {
    ctx.save(); //保存当前绘图状态
    ctx.fillStyle = DEFAULT_BRUSH_COLOR; //设置填充的背景颜色
    ctx.lineWidth = DEFAULT_BRUSH_SIZE; //设置画笔的大小
    ctx.lineCap = "round"; //设置线条，让线条边缘更圆滑
    ctx.beginPath();

    //当前点与上一个点的坐标重合时
    if (pos.x == next_pos.x && pos.y == next_pos.y) {
        ctx.arc(pos.x, pos.y, DEFAULT_BRUSH_SIZE / 1.7, 0, Math.PI * 2, true);
        ctx.fill(); //填充绘画路径
    } else {
        ctx.moveTo(pos.x, pos.y);
        ctx.lineTo(next_pos.x, next_pos.y);
        ctx.stroke();
    }
    ctx.restore(); //回复绘画状态
}

// 页面加载完成后执行init函数
window.addEventListener('load', init, false);
