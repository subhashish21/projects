let score = 0;
let cross = true;


document.addEventListener("click",myaudio);
function myaudio(){
    audio = new Audio('[MP3DOWNLOAD.TO] Naruto Theme - The Raising Fighting Spirit-320k.mp3')
    setTimeout(()=>{
        audio.play();
    },1000)
    

}


// window.onload=function(){
//     alert("Welcome! player to naruto game\n Have Fun");
//     }

document.onkeydown = function (k) {
    console.log("keycode: ",k.keyCode)
    if(k.keyCode==38){
        naruto = document.querySelector(".naruto");
        naruto.classList.add("jump_naruto");
        setTimeout(()=>{
            naruto.classList.remove('jump_naruto')
        },500);
    }
    if(k.keyCode==37){
        naruto = document.querySelector(".naruto");
        dnr = parseInt(window.getComputedStyle(naruto,null).getPropertyValue('right'));
        naruto.style.right = dnr + 120 +'px'; 

    }
    if(k.keyCode==39){
        naruto = document.querySelector(".naruto");
        dnr = parseInt(window.getComputedStyle(naruto,null).getPropertyValue('right'));
        naruto.style.right = (dnr - 120) +'px'; 

    }
}

setInterval(function(){
    naruto = document.querySelector('.naruto');
    gameOver =  document.querySelector('.gameOver');
    sasuke=  document.querySelector('.sasuke');

    dnr = parseInt(window.getComputedStyle(naruto,null).getPropertyValue('right'));
    dnt = parseInt(window.getComputedStyle(naruto,null).getPropertyValue('top'));

    dsr = parseInt(window.getComputedStyle(sasuke,null).getPropertyValue('right'));
    dst = parseInt(window.getComputedStyle(sasuke,null).getPropertyValue('top'));

    offSetX = Math.abs(dnr-dsr);
    offSetY = Math.abs(dnt-dst);
    if(offSetX<63 && offSetY<52){
        gameOver.style.visibility = 'visible';
        sasuke.classList.remove('sasukego');
        audio.pause();

    }
    else if(offSetX<140 && cross){
        score = score+1;
        updateScore(score);
        cross = false; //after updating it will become false the character may have cross each other
        setTimeout(function(){
            cross = true;
        },1000);
        setTimeout(function(){
            anidur =  parseFloat(window.getComputedStyle(sasuke,null).getPropertyValue('animation-duration'));
            speed = anidur-0.1;
            sasuke.style.animationDuration = speed + 's';
        },500)


    }

},100);

function updateScore(score){
    yourscore.innerHTML = "Your Score: "+ score;
}


