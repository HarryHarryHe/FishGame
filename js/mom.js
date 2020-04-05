var momObj = function () {
    this.x;
    this.y;
    this.angle;

    this.momTailTimer = 0;
    this.momTailCount = 0;

    this.momEyeTimer = 0;
    this.momEyeCount = 0;
    this.momEyeInterval = 1000;

    this.momBodyCount = 0;

};
momObj.prototype.init = function () {
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
};
momObj.prototype.draw = function () {
    //lerp x,y  使得一个值趋向于某个目标值
    this. x = lerpDistance(mx, this.x, 0.985);
    this.y = lerpDistance(my, this.y, 0.985);

    //delta angle  计算旋转角度？
    //Math.atan2(y, x)  ->arctan() 反正切
    var deltaY = my - this.y;  //y轴偏移量
    var deltaX = mx - this.x;  //x轴偏移量
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;  //atan2 return an angle between[-PI,PI]

    //lerp angle 让鱼的角度趋于鼠标的角度
    this.angle = lerpAngle(beta, this.angle, 0.6);  //目标值，当前值，趋于速度

    //tail
    this.momTailTimer += deltaTime;
    if (this.momTailTimer > 50){
        this.momTailCount = (this.momTailCount + 1) % 8;
        this.momTailTimer %= 50;
    }
    //eye
    this.momEyeTimer += deltaTime;
    if(this.momEyeTimer > this.momEyeInterval){
        this.momEyeCount = (this.momEyeCount + 1) % 2;
        this.momEyeTimer %= this.momEyeInterval;
        if(this.momEyeCount == 0){
            this.momEyeInterval = Math.random() * 1500 + 2000;
        } else {
            this.momEyeInterval = 200;
        }
    }

    //让变换只对sava()与restore内生效
    ctx1.save();
    ctx1.translate(this.x, this.y);  //为画布的变换矩阵添加水平的和垂直的偏移
    ctx1.rotate(this.angle);  //旋转画布，在translate之后执行
    //共同绘制在中心点上
    var momBodyCount = this.momBodyCount;
    if (data.double==1) {  //orange
        ctx1.drawImage(momBodyOra[momBodyCount], -momBodyOra[momBodyCount].width * 0.5, -momBodyOra[momBodyCount].height * 0.5);   //黄身
    }else{  //blue
        ctx1.drawImage(momBodyBlue[momBodyCount], -momBodyBlue[momBodyCount].width * 0.5, -momBodyBlue[momBodyCount].height * 0.5);   //蓝身
    }
    var momTailCount = this.momTailCount;
    ctx1.drawImage(momTail[momTailCount], -momTail[momTailCount].width * 0.5 + 30, -momTail[momTailCount].height * 0.5);  //尾
    var momEyeCount = this.momEyeCount;
    ctx1.drawImage(momEye[momEyeCount], -momEye[momEyeCount].width * 0.5 , -momEye[momEyeCount].height * 0.5);   //眼
    ctx1.restore();
};