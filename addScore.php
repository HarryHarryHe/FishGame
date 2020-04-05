<?php
/**
 * Created by PhpStorm.
 * User: Harry
 * Date: 2018/12/23
 * Time: 20:36
 */
header('Content-type:text/html;charset=UTF8');

$score = $_GET['score'];
$account = $_GET['account'];

$con = mysqli_connect("localhost", "root", "19990428","FishGame_User");
if(!$con){
    die('Could not connect: ' . mysqli_error());
}
mysqli_query($con,"SET NAMES UTF8");
$sql_update = "UPDATE all_users set record = '".$score."' where account = '".$account."'";
if(mysqli_query($con,$sql_update)){
    echo "当前得分：".$score;
}
else {
//    echo mysqli_error();
    echo "error";
}