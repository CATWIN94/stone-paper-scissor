// Variables
let userScore = 0;
let cpuScore = 0;
const choiceStone = document.querySelector('#stone');
const choicePaper = document.querySelector('#paper');
const choiceScissor = document.querySelector('#scissor');
const userScore_span = document.querySelector('#user-score');
const cpuScore_span = document.querySelector('#cpu-score');
const restart_btn = document.querySelector('#restart-game');
const result_display =document.querySelector('#result');
result_display.children[0].innerText = "Perdistee";
result_display.children[0].style.color = 'red';
console.log(result_display.children[0].innerText);

// Functions/Methods
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};

function randomChoice(){
    let choice = getRandomArbitrary(0,3);
    choice = Math.floor(choice);

    if(choice===0){ //Stone
        return choice = 'stone';
    }
    else if(choice===1){ //Paper
        return choice = 'paper';
    }
    else if(choice===2){ //scissor
        return choice = 'scissor';
    }
    else{
        alert('error choosing cpu option');
    }
};

//Other way to make randomChoice
function getCpuChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Play game
function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
};
function lose(){
    cpuScore++;
    cpuScore_span.innerHTML = cpuScore;
};
function draw(){

};
function matchResult(player){
    let cpu = randomChoice();
    let game = player + cpu;
    let result;
    switch(game){ //player vs cpu
        case 'stonestone':
        case 'paperpaper':
        case 'scissorscissor':
            draw();
            break;
        case 'stonescissor':
        case 'scissorpaper':
        case 'paperstone': 
            win();
            break;
        case 'stonepaper':
        case 'scissorstone':
        case 'paperscissor':
            lose();
            break;      
    }
};

// Restart scores
function restartScores(){
    userScore_span.innerHTML = 0;
    cpuScore_span.innerHTML = 0;
    userScore = 0;
    cpuScore = 0;
};

//Main function
function main(){
    //Game -> Stone
    choiceStone.addEventListener('click', ()=>{ matchResult("stone"); });
    // Game -> paper
    choicePaper.addEventListener('click', ()=>{matchResult("paper"); });
    // Game -> scissor
    choiceScissor.addEventListener('click', ()=>{matchResult("scissor"); });
    //Restart game
    restart_btn.addEventListener('click', ()=>{restartScores();});
};


main();