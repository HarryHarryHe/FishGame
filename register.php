<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>注册界面</title>
    <link type="text/css" rel="stylesheet" href="css/register.css">
    <script type="text/javascript" rel="script" src="js/register.js"></script>
</head>
<body>
       <form action='registerResult.php' method='post'>
            <div class="registerFace">
                <div class="rheader">鱼妈注册</div>
                <input  class="rinput" autocomplete='off' type='text' name='account' placeholder='账号(9位)' onfocus="if(value==defaultValue){value='';
        this.style.color='#000'}" onBlur="if(!value){value=defaultValue;this.style.color='#999'}" style="color:#999999"size='18'
                                         onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"><br>

                <input class="rinput" autocomplete='off' type='password' name='password' placeholder='密码(至少6位)' onFocus="if(value==defaultValue){value='';
        this.style.color='#000'}" onBlur="if(!value){value=defaultValue;this.style.color='#999'}" style="color:#999999"size='18'
                                         onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"><br>

                <div class="check">
                    <input class="checktxt" autocomplete='off' name="checkit" type="text" placeholder="验证码"><img src="checkCode.php" id="code"><br>
                </div>

                <input  class="registerbtn" type='submit' value='创建鱼妈'>
                <?php
                    session_start();
//                    echo $_SESSION['code'];
                ?>
            </div>
        </form>
</body>
</html>