//判断大鱼和果实的距离
function momFruitsCollision() {
    if (!data.gameOver) {
        for (var i = 0; i < fruit.num; i++){
            if (fruit.alive[i]){
                //calc length
                var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
                if (l < 900){  //30的平方
                    //fruit was ate
                    fruit.dead(i);
                    data.fruitNum++;
                    mom.momBodyCount++;
                    if(mom.momBodyCount > 7){
                        mom.momBodyCount = 7;
                    }
                    if (fruit.fruitType[i] == "blue")   //blue
                    {
                        data.double = 2;
                    }
                    wave.born(fruit.x[i],fruit.y[i]);   //被吃的果实位置产生白圈,将位置参数传递过去;
                }
            }
        }
    }

}
//mom baby collision
function momBabyCollision() {
    if (data.fruitNum > 3 && !data.gameOver){
        var l = calLength2(mom.x, mom.y, baby.x, baby.y);
        if (l < 900){
            //baby recover
            baby.babyBodyCount = 0;
            //大鱼恢复原色
            mom.momBodyCount = 0;
            //统计分数 reset
            data.addScore();
            //draw halo
            halo.born(baby.x,baby.y);
        }
    }
}