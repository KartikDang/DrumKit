for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       // this.style.color="yellow";
        var expression=this.innerHTML;
        switch_audio(expression);
        buttonAnimation(expression);
    });

}

document.addEventListener("keydown",function(event)
{
    var press=event.key;
    switch_audio(press);
    buttonAnimation(press);

})


function switch_audio(expression)
{
    switch(expression)
        {
            case "w": var tom_1 =new Audio("sounds/tom-1.mp3");
                    tom_1.play();
                    break;
                   
            case "a": var tom_2 =new Audio("sounds/tom-2.mp3");
                    tom_2.play();
                    break;
   
           case "s": var tom_3 =new Audio("sounds/tom-3.mp3");
                    tom_3.play();
                    break;
   
            case "d": var tom_4 =new Audio("sounds/tom-4.mp3");
                    tom_4.play();
                    break;
            case "j": var snare =new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
   
            case "k": var crash =new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
   
            case "l": var kick_bass =new Audio("sounds/kick-bass.mp3");
                    kick_bass.play();
                    break;

            default: break;
       }
}


function buttonAnimation(expression)
{
    var active=document.querySelector("."+expression);
    active.classList.add("pressed");

        setTimeout(function()
        { 
        
                active.classList.remove("pressed");   
        }, 200);
}

var arr=[];
var arr_final=[];
var click=0;
document.querySelector(".Record").addEventListener("click",function(e){

        click++;
        arr=[];
        if(click==1){
        document.addEventListener("keydown",function(e){
                console.log(e.key);
                if(e.key=="w"||e.key=="a"||e.key=="s"||e.key=="d"||e.key=="j"||e.key=="k"||e.key=="l"){
                
                        arr.push(e.key);      
                } 
        });
}

        document.querySelector(".cont").classList.remove("visible");

 

        // if(click%2!=0){

        //         document.querySelector(".Record").innerHTML="Stop Recording";
        //         document.querySelector(".Record").classList.add("Stop");
        //         document.querySelector(".Record").classList.remove("Record");

        // }

        // else{
        //         document.querySelector(".Stop").innerHTML="Record Node";
        //         document.querySelector(".Stop").classList.add("Record");
        //         document.querySelector(".Stop").classList.remove("Stop");
        // }  

});


var click_2=0;
document.querySelector(".Stop").addEventListener("click",function(){
        click++;

                arr_final=arr;
                arr=[];

                document.querySelector(".cont").classList.remove("box");
                document.querySelector(".record_text").innerHTML="Recorded Successfully. Play using Replay Button";
})



document.querySelector(".Replay").addEventListener("click",function(){
        var i=0;
        function myloop(){

                setTimeout(function(){
                        console.log(arr_final[i]);
                        buttonAnimation(arr_final[i]);
                        switch_audio(arr_final[i]);
                        i++;
                        if(i<arr_final.length){
                                myloop();
                        }
                },200);
        }
        
        myloop();

        arr_final=arr_final;
})












 function playAudio(n)
 {   

    document.querySelectorAll(".drum")[i].style.color="white";
     switch(n)
     {
         case 0: var tom_1 =new Audio("sounds/tom-1.mp3");
                 tom_1.play();
                 break;
                
         case 1: var tom_2 =new Audio("sounds/tom-2.mp3");
                 tom_2.play();
                 break;

        case 2: var tom_3 =new Audio("sounds/tom-3.mp3");
                 tom_3.play();
                 break;

         case 3: var tom_4 =new Audio("sounds/tom-4.mp3");
                 tom_4.play();
                 break;
         case 4: var snare =new Audio("sounds/snare.mp3");
                 snare.play();
                 break;

         case 5: var crash =new Audio("sounds/crash.mp3");
                 crash.play();
                 break;

         case 6: var kick_bass =new Audio("sounds/kick-bass.mp3");
                 kick_bass.play();
                 break;
    }
}

