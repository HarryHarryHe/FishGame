var can1;  //画笔
var can2;
var ctx1;  //画布
var ctx2;

var lastTime;
var deltaTime;

var canHeight;
var canWidth;
var bgPic;
bgPic = new Image();

var ane;
var fruit;

var mom;
var baby;

var mx;  //鼠标x轴
var my;

var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail = [];
var momEye = [];

var data;

var momBodyOra = [];
var momBodyBlue = [];

var wave;

var halo;

var dust;
var dustPic = [];

// 这个意思就是当body加载完之后，就把game作为js的入口
document.body.onload = game;

function game() {
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}

function init() {
    //获得canvas context
    can1 = document.getElementById("canvas1");  //fishes, dust, UI, circle
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById("canvas2");  //background, ane, fruits
    ctx2 = can2.getContext('2d');

    can1.addEventListener('mousemove', onMouseMove, false);  //添加鼠标滑动位置监听

    bgPic.src = "./src/background.jpg";
    canWidth = can1.width;
    canHeight = can1.height;

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    mom = new momObj();
    mom.init();
    mx = canWidth * 0.5;
    my = canHeight * 0.5;
    baby = new babyObj();
    baby.init();
    //baby
    for (var i = 0; i < 8; i++) {
        babyTail[i] = new Image();
        babyTail[i].src = "./src/babyTail" + i + ".png";
    }
    for (var i = 0; i < 2; i++) {
        babyEye[i] = new Image();
        babyEye[i].src = "./src/babyEye" + i + ".png";
    }
    for (var i = 0; i < 20; i++) {
        babyBody[i] = new Image();
        babyBody[i].src = "./src/babyFade" + i + ".png";
    }
    //mom
    for (var i = 0; i < 8; i++) {
        momTail[i] = new Image();
        momTail[i].src = "./src/bigTail" + i + ".png";
    }
    for (var i = 0; i < 2; i++) {
        momEye[i] = new Image();
        momEye[i].src = "./src/bigEye" + i + ".png";
    }

    data = new dataObj();
    for (var i = 0; i < 8; i++) {
        momBodyOra[i] = new Image();
        momBodyBlue[i] = new Image();
        momBodyOra[i].src = "./src/bigSwim" + i + ".png";
        momBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
    }
    wave = new waveObj();
    wave.init();

    halo = new haloObj();
    halo.init();

    for (var i = 0;i<7;i++){
        dustPic[i] = new Image();
        dustPic[i].src = "./src/dust" + i + ".png";
    }
    dust = new dustObj();
    dust.init();
}

function gameloop() {
    //比setInterval, setTimeout更智能(会根据你电脑的性能自动设置间隔时间),不过带来的问题是 frame,per,second(fps)会不固定
    window.requestAnimationFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if (deltaTime > 40) deltaTime = 40;  //防止chrome浏览器切换页面在切回来时果实变得很大
    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();

    //把前面一帧的内容清空掉在绘制
    ctx1.clearRect(0, 0, canWidth, canHeight);
    mom.draw();
    baby.draw();
    momFruitsCollision();
    momBabyCollision();

    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();
}
//获取鼠标位置
function onMouseMove(e) {
    if (!data.gameOver){
        if (e.offsetX || e.layerX) {
            mx = e.offsetX == undefined ? e.offsetX : e.layerX;
            my = e.offsetY == undefined ? e.offsetY : e.layerY;
        }
    }
}