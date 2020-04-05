<?php
/**
 * Created by PhpStorm.
 * User: Harry
 * Date: 2018/9/7
 * Time: 22:18
 */

require_once 'extraFun.php';

header("Content-type:text/html;charset=utf8");

$db_account = "root";
$db_password = "19990428";
$con = mysqli_connect("127.0.0.1:3306",$db_account,$db_password);

$sql_createdb = "CREATE DATABASE IF NOT EXISTS FishGame_User;";

$sql_createtb = "CREATE TABLE IF NOT EXISTS `all_users` (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `account` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '账号',
  `password` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '密码',
  `record` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '得分',
  `top_record` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '最高分',
  PRIMARY KEY (`id`,`account`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1";


if($con){
    if(mysqli_query($con,$sql_createdb)){
        mysqli_select_db($con,"FishGame_User");
            if(mysqli_query($con,$sql_createtb)){
//                echo "表创建成功";
            }
            else{
                die("create_table fail". mysqli_error());
                echo "表创建失败";
            }
        }
    else{
        die("create_db fail". mysqli_error());
        _alert_back("创建数据库失败");
    }
}else{
    die("connect_db fail". mysqli_error());
    _alert_back("数据库连接失败");
}

