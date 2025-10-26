        var score=0;
        function play()
            {
                var num=document.getElementById("num");
                var score1=document.getElementById("score");
                var num1=num.value;
                var comnum=Math.floor(Math.random()*10)+1;
                if(comnum>=0&&comnum<=6)
                {
                    comnum=comnum;
                }
                else if(comnum>6&&comnum<=10){
                    comnum-=4;
                }
                if(num1==comnum&&num1>=0&&num1<=6)
                {
                    alert("you loose the match final score:"+score);
                    score=0;
                }
                else if(num1!=comnum&&num1>=0&&num1<=6)
                {
                    score=score+Number(num1);
                    if(num1==1)
                    {
                        alert("single");
                    }
                    if(num1==4)
                    {
                        alert("boundary");
                    }
                    if(num1==6)
                    {
                        alert("six");
                    }
                }
                else if(num1>6)
                {
                    alert("enter number inbetween 1 to 6");
                }
                 else
                {
                    alert("enter valid number");
                }
                if(score>=50&&score<=56)
                {
                    alert("congratulation! you got half century");
                }
                if(score==100)
                {
                    alert("congratulation! you got century");
                }
                return score1.value=score;
            }