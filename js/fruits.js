var fruitObj = function () {
    this.alive = [];  //bool
    this.x = [];  //坐标
    this.y = [];
    this.l = [];  //大小
    this.aneNo = [];
    this. spd =[];  //成长，向上飘速度
    this.fruitType = [];
    this.orange = new Image();
    this.blue = new Image();
}
fruitObj.prototype.num = 30;  // 30个果实
fruitObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++){
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.aneNo[i] = 0;
        this.fruitType[i] = "";
        this.spd[i] = Math.random() * 0.01 + 0.01;  //[0.01, 0.02)
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
};
fruitObj.prototype.draw = function () {
    for (var i = 0;i < this.num; i++){
        //draw
        //find an ane, grow, fly up
        if (this.alive[i] == true){
            if (this.fruitType[i] == "blue"){
                var pic = this.blue;
            }
            else {
                var pic = this.orange;
            }
            //找到坐标并把图片绘制出来
            if (this.l[i] <= 14){   //fruit grow
                var NO = this.aneNo[i];
                this.x[i] = ane.headx[NO];
                this.y[i] = ane.heady[NO];
                this.l[i] += this.spd[i] * deltaTime;
            }
            else{
                this.y[i] -= this.spd[i] * 3 * deltaTime;
            }
            ctx2.drawImage(pic,this.x[i] - this.l[i]*0.5, this.y[i] - this.l[i]*0.5, this.l[i], this.l[i]); //x,y表示位置，后边两个表示大小
            if (this.y[i] < 10){
                this.alive[i] = false;
            }
        }

    }
};
// 生成果实
fruitObj.prototype.born = function (i) {
    this.aneNo[i] = Math.floor(Math.random() * ane.num);
    this.l[i] = 0;
    this.alive[i] = true;
    var ran = Math.random();
    if (ran < 0.2){  //控制蓝果实生成几率
        this.fruitType[i] = "blue";  //blue
    } 
    else {
        this.fruitType[i] = "orange";  //orange 
    }

};
//被吃
fruitObj.prototype.dead = function (i) {
    this.alive[i] = false;
};
//计数发果实
function fruitMonitor() {
    var num = 0;  //计数
    for (var i = 0; i < fruit.num; i++){
        if (fruit.alive[i] == true)  num++;
    } 
    if (num < 15){
        //send fruit
        sendFruit();
        return;
    }
};
function sendFruit() {
    for (var i = 0; i<fruit.num; i++){
        if (!fruit.alive[i]){
            fruit.born(i);
            return;
        }
    }
}