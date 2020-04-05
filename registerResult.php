<meta charset="UTF-8">
<?php
/**
 * Created by PhpStorm.
 * User: Harry
 * Date: 2018/9/8
 * Time: 19:21
 */
//开启session
session_start();

require_once 'extraFun.php';

$account = $_POST['account'];
$password = $_POST['password'];
$checkcodetxt = $_POST['checkit'];

if($checkcodetxt==$_SESSION['code']){
    if($account==''||$password==''){
        _alert_back('(✿◕‿◕✿)安全起见,账号或密码不能为空的噢');
//    header("Refresh:1,Url=register.php");
    }else{
        include_once 'dbUsers.php';
        $sql = "SELECT `account` FROM `all_users` WHERE `account`='".$account."'";
        $result = mysqli_query($con,$sql);
        $row=mysqli_fetch_array($result);
        if($row[0]==$account){
            _alert_back('(￣▽￣)"有人抢先一步注册了噢,换一个试试吧');
//        header("Refresh:0.5 Url=register.php");
        }
        else{
            if(!is_numeric($account)){
                _alert_back('(づ￣ 3￣)づ输入9位账号噢');
            }
            else{
                if(mb_strlen($account,'utf8')==9){
                    if(mb_strlen($password,'utf8')>=6){
                        $query = "INSERT INTO `all_users`(`account`, `password`) VALUES ('".$account."','".$password."')";
                        if(mysqli_query($con,$query)){
                            echo "注册成功,正在跳转至登陆页面...";

                            header("Refresh:2,Url=login_index.html");
                        }
                        else{
                            echo mysqli_error();
                            return;
                            _alert_back("w(ﾟДﾟ)w发生异常错误");
                            header("Refresh:1,Url=login_index.html");
                        }
                    }
                    else{
                        _alert_back("┏ (゜ω゜)=密码要求6位或6位以上噢");
                    }
                    }
                else{
                    _alert_back('Σ(っ °Д °;)っ账号貌似填错了呢,重新检查下吧');
                }
            }
        }
    }
}
else{
    _alert_back("^(*￣(oo)￣)^验证码输入错了噢,检查下呗~");
}




//include_once 'dbUsers.php';
//
//class register extends dbUsers {
//    function __construct()
//    {
//        parent::__construct();
//        $this->receiveForm();
//        $this->face();
////        $this->pageJump();
//    }
//    function receiveForm(){
//        if(count($_POST)!=0){
//            $this->savedatas($_POST['account'],$_POST['password'],date("Y-m-d H:i:s",time()+8*60*60));
//            echo "注册成功";
//        }
//        else{
//            echo "您还没注册,现在开始注册吧";
//        }
//    }
//    function savedatas($u,$p,$t){
//        $query = "INSERT INTO `all_users`(`account`, `password`, `time`) VALUES ('".$u."','".$p."','".$t."')";
//        mysqli_query($this->database2,$query);
//    }
//}
//$s = new register();
