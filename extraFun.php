<meta charset="UTF-8">
<?php
/**
 * 额外的方法
 * Created by PhpStorm.
 * User: Harry
 * Date: 2018/9/8
 * Time: 21:39
 */

/***
 * 弹窗
 * @param $_warn
 * history.back()回到刚刚的页面
 */
function _alert_back($_warn)
{
    echo "<script>alert('" . $_warn . "');history.back()</script>";
}