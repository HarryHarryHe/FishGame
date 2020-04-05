<meta charset="UTF-8">

<?php
/**
 * Created by PhpStorm.
 * User: Harry
 * Date: 2018/12/23
 * Time: 17:35
 */

require_once 'extraFun.php';

if(!isset($_POST['account'])){
    echo "Can't into";
    header("Refresh:1,Url=login_index.html");
    exit();
}

$account = $_POST['account'];
$password = base64_encode($_POST['password']);  //加密


if($account==''||$password==''){
    _alert_back('!(*￣(￣　*)账号或密码不能为空噢');
    header("Refresh:1 Url=login_index.html");
}
else{
    require_once 'dbUsers.php';
    $query = "SELECT `account`, `password` FROM `all_users` WHERE `account`='".$account."'AND `password`='".base64_decode($password)."'";  //解密
    $result = mysqli_query($con,$query);
    $row = mysqli_fetch_array($result);
    if($row[0]==$account&&$row[1]==base64_decode($password)){
        //启动session
        session_start();
        $_SESSION["loginKey"]=1;
        $_SESSION['account'] = $account;
        echo $_SESSION['account'];
        echo "鱼妈妈登陆成功,正在和鱼宝宝进入海底...";
        echo "<br>";
        echo "游戏规则：鱼妈妈吃到四个果实或以上，即可喂养鱼宝宝，千万别让他饿着噢.";
        header("Refresh:5,Url=game.php");
    }
    else{
        _alert_back("(＃°Д°)账号或密码错误");
    }
}
