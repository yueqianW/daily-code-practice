var canvasWidth = 1024;
var canvasHeight = 768;
var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30

const endTime = new Date("2017/1/9, 13:0:0");
var curShowTimeSeconds = 0;
var balls = [];
const colors = ['#33b5e5', '#09c', '#a6c', '#93c', '#9c0', '#690', '#fb3', '#f80', '#f44', '#c00'];

window.onload = function() {
    var canvas = document.getElementById('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    var ctx = canvas.getContext('2d');

    curShowTimeSeconds = getCurrentShowTimeSeconds();

    setInterval(function() {
        render(ctx);
        update();
    }, 50);

}

function update() {
    var nextShowTimeSeconds = getCurrentShowTimeSeconds();

    var nexthour = parseInt(nextShowTimeSeconds / 3600);
    var nextmin = parseInt((nextShowTimeSeconds - nexthour * 3600) / 60);
    var nextsec = nextShowTimeSeconds % 60;

    var curhour = parseInt(curShowTimeSeconds / 3600);
    var curmin = parseInt((curShowTimeSeconds - curhour * 3600) / 60);
    var cursec = curShowTimeSeconds % 60;

    if (nextsec != cursec) {
        if (parseInt(curhour / 10) != parseInt(nexthour / 10)) {
            addBalls(MARGIN_LEFT + 0, MARGIN_TOP, parseInt(curhour / 10));
        }
        if (parseInt(curhour % 10) != parseInt(nexthour % 10)) {
            addBalls(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(curhour / 10));
        }
        curShowTimeSeconds = nextShowTimeSeconds;
    }
}

function addBalls(x, y, num) {
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
                var aBall = {
                    x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
                    y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
                    g: 1.5 + Math.random(),
                    vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                    vy: -5,
                    color: colors[Math.floor(Math.random() * colors.length)]
                }

                balls.push(aBall);
            }
        }
    }

    updateBalls();
}

function updateBalls() {
    for (var i = 0; i < balls.length; i++) {
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if (balls[i].y >= canvasHeight - RADIUS) {
            balls[i].y = canvasHeight - RADIUS;
            balls[i].vy = -balls[i].vy * 0.75;
        }
    }
}

function getCurrentShowTimeSeconds() {
    var curTime = new Date();
    var ret = endTime.getTime() - curTime.getTime();
    ret = Math.round(ret / 1000);

    return ret >= 0 ? ret : 0;
}


function render(ctx) {

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    var hour = parseInt(curShowTimeSeconds / 3600);
    var min = parseInt((curShowTimeSeconds - hour * 3600) / 60);
    var sec = curShowTimeSeconds % 60;

    // console.log(parseInt(1.2));

    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hour / 10), ctx);
    renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hour % 10), ctx);
    renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, ctx);
    renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, parseInt(min / 10), ctx);
    renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(min % 10), ctx);
    renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, ctx);
    renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(sec / 10), ctx);
    renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(sec % 10), ctx);

    for (var i = 0; i < balls.length; i++) {
        ctx.fillStyle = balls[i].color;
        ctx.beginPath();
        ctx.arc(ball[i].x, ball[i].y, RADIUS, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function renderDigit(x, y, num, ctx) {
    ctx.fillStyle = "rgb(0,102,153)";
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
                ctx.beginPath();
                ctx.arc(x + j * 2 * (RADIUS + 1) + (RADIUS + 1), y + i * 2 * (RADIUS + 1) + (RADIUS + 1), RADIUS, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
            }
        }
    }
}
