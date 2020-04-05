var aneObj = function () {
    //start point(不用定义，已知html5向下为正，所以y相同), control point(不用定义,startPoint往上移一点即得到), end point(sinX)
    this.rootx = [];
    this.headx = [];
    this.heady = [];
    this.amp = [];  //振幅
    this.angle = 0;  //角度
};
// prototype内属性、方法是能够共享,会自动生成一个构造函数？
aneObj.prototype.num =50;
aneObj.prototype.init = function(){
    for (var i = 0; i < this.num; i++ ){
        this.rootx[i] = i * 16 + Math.random() * 20;
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight - 250 + Math.random() * 50;    //头部的y值 即控制海葵高度
        this.amp[i] = Math.random() * 50 + 50;
    }
};
//绘制海草
aneObj.prototype.draw = function () {
    this.angle += deltaTime * 0.0008;
    var l = Math.sin(this.angle);  //随着x即角度，时间的增加，y轴不断周期重复运动   [-1,1]
    ctx2.save();   //告诉编译器 这个样式只在 save()和restore()之间起作用，出了这个其它样式还是会恢复的
    ctx2.globalAlpha = 0.6;
    ctx2.lineWidth = 20;
    ctx2.lineCap = 'round';
    ctx2.strokeStyle = "#3b154b";
    for (var i = 0; i < this.num; i++){
        //beginPath, moveTo, LineTo, stroke, strokeStyle, LineWidth, LineCap(首尾样式), globalAlpha(全局透明度)
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i], canHeight);
        this.headx[i] = this.rootx[i] + l * this.amp[i];  //当前海葵头部的具体位置，通过sin函数调整过的值
        ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]);  //弄一个贝塞尔曲线
        ctx2.stroke();
    }
    ctx2.restore();
};
