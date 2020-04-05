<?php
    //未经登陆禁止访问
    session_start();
    include 'checkLogin.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>妈喂宝</title>
    <style type="text/css">
        body{
            background: rgb(0,28,75);
            padding-top: 10px;
        }
        .all_bg{
            width: 800px;
            height: 600px;
            margin: 0 auto;
        }
        #all_canvas{
            position: relative;
            width: 800px;
            height: 600px;
            margin: 0;
        }
        #canvas1{
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 1;
        }
        #canvas2{
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 0;
        }
    </style>
</head>
<body>
    <embed src="music/bgMusic.mp3" controls="controls" autoplay="true" hidden="true" loop="loop">
    <div class="all_bg">
        <!--<iframe src="//music.163.com/outchain/player?type=3&id=908528214&auto=1&height=66"></iframe>-->
        <div id="all_canvas">
            <canvas id="canvas1" width="800" height="600"></canvas>
            <canvas id="canvas2" width="800" height="600"></canvas>
        </div>
        <a href="login_index.html" style="text-decoration: none;position: relative;float: right">回到首页</a>
        <a href="game.php" style="text-decoration: none;position: relative;float: left">重新开始</a>
    </div>
    <script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="js/commonFunctions.js"></script>
    <script type="text/javascript" src="js/background.js"></script>
    <script type="text/javascript" src="js/ane.js"></script>
    <script type="text/javascript" src="js/fruits.js"></script>
    <script type="text/javascript" src="js/mom.js"></script>
    <script type="text/javascript" src="js/baby.js"></script>
    <script type="text/javascript" src="js/collision.js"></script>
    <script type="text/javascript" src="js/data.js"></script>
    <script type="text/javascript" src="js/wave.js"></script>
    <script type="text/javascript" src="js/halo.js"></script>
    <script type="text/javascript" src="js/dust.js"></script>
<!--    <script type="text/javascript" src="js/Ajax.js"></script>-->
</body>
</html>