const canvas =  document.getElementById('canvas');
let myScore = document.getElementById('myScore');
let play = document.getElementById('play');
let display = document.querySelector('.display');

let ctx = canvas.getContext('2d');


let xPos = 20;
let yPos = 180;

let xSecondaryPos = 360;
let ySecondaryPos = 160;

let xDir = 0;
let scoreCounter = 0;
const game = () =>{

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "crimson";
    ctx.fillRect(xSecondaryPos,ySecondaryPos, 20, 40);

    ctx.fillStyle = "purple";
    ctx.fillRect(xPos,yPos, 20, 20);
    
    xSecondaryPos+=xDir
    xDir=-5;

    if(xSecondaryPos < -40){
        xSecondaryPos = 400;
    }


    if(xPos > xSecondaryPos){
        if(xPos > xSecondaryPos && yPos < ySecondaryPos){
            // console.log('y', yPos);
            // console.log('secY', ySecondaryPos);
            console.log("Hello");
            scoreCounter++;
        }
        else if(yPos > ySecondaryPos){
            console.log("Lost");
            scoreCounter--;
            if(scoreCounter<-50){
                console.log("You loose");
                canvas.style.display = "none";
                display.innerText = "You LOST"
                return;
            }
        }
    }
    
    requestAnimationFrame(game);
    myScore.innerText = scoreCounter;

}

canvas.addEventListener('click', ()=>{
    yPos=100;
    xPos+=30;
    setTimeout(() => {
        yPos=140;
    }, 200);
    setTimeout(() => {
        yPos=160;
    }, 300);
    setTimeout(() => {
        yPos=180;
        xPos-=30;
    }, 400);

})


play.addEventListener('click', game);
game ();