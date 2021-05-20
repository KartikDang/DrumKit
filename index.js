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

