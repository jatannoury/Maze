window.addEventListener('DOMContentLoaded', function(){
    start_game=true;
    can_substract=true;
    Start();
    array=[]
});

var Score=0;


function Start(){
    x=document.getElementsByClassName("boundary")
    x=x[x.length-1]
    x.innerHTML=0
    function restart(){
        containers=document.getElementsByClassName("boundary")
        GG=1;
        for (let i=0;i<containers.length;i++){
            containers[i].style.borderColor="Black";
    }};
 
    GG=0
    function checkCounter(){

        GG++;
        if (GG>3){

            document.getElementById("Score1").innerHTML="0.00"
            gameOver();
            
        }
        function gameOver(){
            if (can_substract){
                Score-=10;
                x.innerHTML=Score;
                can_substract=false;
            }
            if (!start_game)return;
            
            containers=document.getElementsByClassName("boundary")
            for (let i=0;i<containers.length;i++){
                containers[i].style.borderColor="Red";
            }
            document.getElementById("status").innerHTML = "Game over!"
            document.getElementById("Score2").innerHTML = new_curr
            array.push(new_curr)
            clearInterval(set)
            console.log(array)
        }
        
        
        document.getElementById("game").addEventListener("mouseover",checkCounter);
        document.getElementById("start").addEventListener("mouseover",function(){
            start_game=true;
            can_substract=true;
            restart();
        });
        
        document.getElementById("start").addEventListener("click",function(){

            location.reload();
        })
    }
    
    document.getElementById("start").addEventListener("mouseover", function () {
        document.getElementById("status").innerHTML="Game on!"
        current=new Date().getTime();
        set = setInterval(function () {
            new_curr = (new Date().getTime() - current)/1000
            document.getElementById("Score1").innerHTML = new_curr;
        }, 100);
        checkCounter();
    }
    
       
    );
    
    document.getElementById("end").addEventListener("mouseenter",function(){

        if (start_game && GG == 4) {
            document.getElementById("Score3").innerHTML = Math.min(...array)
        document.getElementById("status").innerHTML = "You won!";
        console.log("2",Score)
        Score+=15;
        x.innerHTML=Score;
        start_game=false;
        }
        restart();
    })

    
   
};
        


        // document.getElementById("end").addEventListener("mouseleave",function(){
        //     Score+=5;
        //     x.innerHTML=Score;})
    

	