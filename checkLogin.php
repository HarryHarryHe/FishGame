<?php
/**
 * Created by PhpStorm.
 * User: Harry
 * Date: 2018/9/14
 * Time: 0:05
 */

if(!isset($_SESSION["loginKey"])){
    echo "Don't have permission,Please login again";
    header("Refresh:1,Url=login_index.html");
    exit();
//    echo '<script language="javascript">location.href="indexUrl"</script>';
}