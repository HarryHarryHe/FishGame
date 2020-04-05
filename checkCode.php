<?php
/**
 * Created by PhpStorm.
 * User: Harry
 * Date: 2018/9/9
 * Time: 17:13
 */

/***
 * 开启session
 * 定义变量 不然会提示警告
 * 随机code_num位数生成
 * dechex() 函数把十进制转换为十六进制。
 * mt_rand()产生从$min到$max之间的随机数
 */
session_start();
$nums = null;
$code_num = 4;
for($i=0;$i<$code_num;$i++){
    $nums .=dechex(mt_rand(0,15));
}
//保存在_SESSION中
$_SESSION['code'] = $nums;
//echo $_SESSION['code'];


//创建一张图像用来存放二维码
$_width = 75;
$_height = 25;
$_img = imagecreatetruecolor($_width,$_height);

//白色 背景
$_white = imagecolorallocate($_img,255,255,255);
//填充颜色 x,y为起始位置 $_white为颜色
imagefill($_img,0,0,$_white);

//黑色 边框
$_black =  imagecolorallocate($_img,0,0,0);
//绘制矩形函数 @句柄 @开始位置 x,y @结束位置 $_width-1,$_height-1 @颜色
imagerectangle($_img,0,0,$_width-1,$_height-1,$_black);

//随机画出5个彩色线条
for($i=0;$i<5;$i++){
    //随机色
    $_colorful = imagecolorallocate($_img,mt_rand(0,255),mt_rand(0,255),mt_rand(0,255));
    //画出线条 imageline @句柄 @线条起始位置x(0-$_width) 与 y(0-$_height)@线条结束位置x(0-$_width) 与 y(0-$_height) @颜色
    imageline($_img,mt_rand(2,$_width/3),mt_rand(2,$_height-2.),mt_rand((2*$_width)/3,$_width-2),mt_rand(2,$_height-2),$_colorful);
}
//随机淡色雪花*
for($i=0;$i<40;$i++){
    //随机淡色
    $_colorful = imagecolorallocate($_img,mt_rand(200,255),mt_rand(200,255),mt_rand(200,255));
    //imagestring @句柄 @font 字体 @x轴 @y轴 @string文字 @颜色
    imagestring($_img,1,mt_rand(2,$_width-10),mt_rand(2,$_height-8),'*',$_colorful);
}
//输出验证码
for($i=0;$i<strlen($_SESSION['code']);$i++){
    //发现_SESSION['code']还是个数组，且4个值中每个都可以对应_SESSION['code'][0-3] 将框分割成四等分 将每个值按算好的位置生成
    imagestring($_img,mt_rand(3,5),$i*$_width/$code_num+mt_rand(2,10),mt_rand(2,$_height/2-2),$_SESSION['code'][$i],$_black);
}

//输出图像
header('Content-Type:image/png');
ob_clean();

imagepng($_img);


//销毁图像
imagedestroy($_img);
?>