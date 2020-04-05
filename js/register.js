//等页面加载完毕后执行
window.onload = function () {
    var code = document.getElementById('code');
          //局部刷新
//onclick="";?传参 是将code这个值传到下一页 code的值就是Math.random()的随机数
// Math.random()是生成一个随机数,目的在于让访问的checkCode.php进行刷新，而不会一直都是同一张图片
    code.onclick = function () {
        this.src = 'checkCode.php?code='+Math.random();
    };
}