var waveObj = function () {
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];

};
waveObj.prototype.num = 10;
waveObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.r[i] = 0;
    }
};
waveObj.prototype.draw = function () {
    ctx1.save();
    ctx1.lineWidth = 2;
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "white";
    for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
            this.r[i] += deltaTime * 0.04;  //圈增大的速度
            if (this.r[i] > 50) {
                this.alive[i] = false;
                break;  //不希望出现负值的alpha
            }
            var alpha = 1 - this.r[i] / 50;   //alpha 与 半径r 存在着相反的关系
            //api  画圆
            ctx1.beginPath();
            ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);  //位置x，位置y，半径，起始角度,结束角度
            ctx1.closePath();
            ctx1.strokeStyle = "rgba(255,255,255," + alpha + ")";
            ctx1.stroke();  //描边 不然显示不出来
            //draw
        }
    }
    ctx1.restore();
};
waveObj.prototype.born = function (x, y) {
    for (var i = 0; i < this.num; i++) {
        if (!this.alive[i]) {
            this.alive[i] = true;
            this.r[i] = 10;
            this.x[i] = x;
            this.y[i] = y;
            //born
            return;
        }
    }
}