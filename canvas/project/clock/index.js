(function clock() {
    var drawing = document.getElementById('demo');
    var context = drawing.getContext('2d');

    //清空画布
    context.clearRect(0, 0, 400, 400);

    //获取时间
    var date, h, m, s;

    date = new Date();
    h = date.getHours();
    h = h > 12 ? h - 12 : h;

    m = date.getMinutes();
    s = date.getSeconds();

    //外圆
    context.save();
    context.beginPath();
    context.arc(200, 200, 155, 0, 2 * Math.PI);
    context.fillStyle = "#bbb";
    context.fill();

    //内圆
    context.beginPath();
    context.fillStyle = '#48585c';
    context.arc(200, 200, 150, 0, 2 * Math.PI);
    context.fill();
    context.restore();

    //小时刻度
    context.save();
    for (var i = 0; i < 60; i++) {
        context.strokeStyle = '#ccc';
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(200 + Math.cos((6 + i * 6) / 180 * Math.PI) * 145, 200 - Math.sin((6 + i * 6) / 180 * Math.PI) * 145);
        context.lineTo(200 + Math.cos((6 + i * 6) / 180 * Math.PI) * 138, 200 - Math.sin((6 + i * 6) / 180 * Math.PI) * 138);
        context.stroke();
    }
    context.restore();

    //分钟刻度
    context.save();
    for (var j = 0; j < 12; j++) {
        context.strokeStyle = 'white';
        context.lineWidth = 3;
        context.beginPath();
        context.moveTo(200 + Math.cos((30 + j * 30) / 180 * Math.PI) * 145, 200 - Math.sin((30 + j * 30) / 180 * Math.PI) * 145);
        context.lineTo(200 + Math.cos((30 + j * 30) / 180 * Math.PI) * 128, 200 - Math.sin((30 + j * 30) / 180 * Math.PI) * 128);
        context.stroke();
    }
    context.restore();

    //表盘数字
    context.save();
    context.font = '30px Arial';
    context.fillStyle = 'white';
    context.beginPath();
    context.fillText('12', 182, 100);
    context.fillText('3', 305, 212);
    context.fillText('6', 192, 320);
    context.fillText('9', 80, 212);
    context.restore();

    //时针
    context.save();
    context.translate(200, 200);
    context.lineWidth = 10;
    context.strokeStyle = 'white';
    context.rotate(h * (Math.PI / 6) + m * (Math.PI / 360) + s * (Math.PI / 21600));
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(80, 0);
    context.lineCap = 'round';
    context.stroke();
    context.restore();

    //分针
    context.save();
    context.translate(200, 200);
    context.lineWidth = 7;
    context.lineCap = 'round';
    context.strokeStyle = '#fff';
    context.rotate(m * (Math.PI / 30) + s * (Math.PI / 1800));
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(105, 0);
    context.stroke();
    context.restore();

    //秒针
    context.save();
    context.translate(200, 200);
    context.strokeStyle = '#fff';
    context.rotate(s * (Math.PI / 30));

    context.beginPath();
    context.lineWidth = 4;
    context.moveTo(0, 0);
    context.lineTo(0, 135);
    context.lineCap = 'round';
    context.stroke();

    context.beginPath();
    context.lineWidth = 10;
    context.moveTo(0, 0);
    context.lineTo(0, -30);
    context.stroke();
    context.restore();

    //中心
    context.save();
    context.beginPath();
    context.fillStyle = "white";
    context.arc(200, 200, 14, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.strokeStyle = '#aaa';
    context.lineWidth = 1;
    context.arc(200, 200, 7, 0, 2 * Math.PI);
    context.stroke();
    context.restore();

    window.requestAnimationFrame(clock);
})();
