var http_request = false;
function createRequest(url) {

    http_request = false;
    if(window.XMLHttpRequest){
        http_request = new XMLHttpRequest();
        if(http_request.overrideMimeType){
            http_request.overrideMimeType("text/xml");
        }
    }
    else if(window.ActiveXObject){
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {

            }
        }
    }
    if(!http_request){
        alert("不能创建XMLHTTP实例");
        return false;
    }
    http_request.onreadystatechange = alertContens;
    http_request.open("GET",url,true);
    http_request.send(null);
}
function alertContens() {
    if(http_request.readyState == 4){
        if (http_request.status == 200){
            alert(http_request.responseText);
            location.reload();
        }
        else {
            alert("你请求的页面发生错误");
        }
    }
}
function checkScore() {
    var score = data.addScore();
    var account= login_form.account.value;
    console.log("score"+score);
    console.log("account"+account);
    createRequest('addScore.php?score='+score+'&account='+account+'&nocache='+new Date().getTime());
    history.back();
}