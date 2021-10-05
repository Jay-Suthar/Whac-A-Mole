const box = document.querySelectorAll('.box');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#timeLeft');
const score = document.querySelector('#score');

let hit
let result = 0;
let timerId = null;
let time = 60;

function randomBox(){
    box.forEach(element =>{
        element.classList.remove('mole');
    })

    let active = box[Math.floor(Math.random()*9)];
    active.classList.add('mole');

    hit = active.id;
}

box.forEach(square =>{ 
    square.addEventListener('mousedown',()=>{
        if(square.id == hit){
            result++;
            hit=null;
            score.textContent=result;
        }
    })
})

function moveMole(){
    timerId = setInterval(randomBox,400);
}

moveMole();

function timer(){
    time--;
    timeLeft.textContent=time;
    const gameover = document.getElementById('gameover');
    if(timeLeft.textContent==0)
    {
        timeLeft.textContent=0;
        clearInterval(timerId);
        clearInterval(countDown);
        gameover.textContent = "Game Over!";
    }
}

let countDown = setInterval(timer,1000);
