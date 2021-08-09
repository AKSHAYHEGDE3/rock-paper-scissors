let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")
let screen1 = document.querySelector('.show i');
let screen2 = document.querySelector('.computer i');
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissor = document.getElementById("scissor")
let start=document.getElementById('start_btn');
let playerScore = 1;
let computerScore = 1;
let finalResult = document.getElementById("final_result");
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
const playerOptions = [rock,paper,scissor];
let final_result=document.querySelector('#finalResult');

start.addEventListener('click',lets_play)

function lets_play(){
 
   // start button to start the game
    start.style.display='none';

    // After clicking rock  paper scissor buttons
    playerOptions.forEach(btn => {
        btn.addEventListener('click',function(e){

            let playerChoice=e.target.className;
            screen1.className=playerChoice;

            let randomNum = Math.floor(Math.random() * randomClasses.length);
            screen2.className = randomClasses[randomNum];
             
            // checking the winner in each round
            if(screen1.className === screen2.className){
                score1.innerHTML = score1.innerHTML;
                score2.innerHTML = score2.innerHTML;
            } 
            else if(screen1.className === randomClasses[0] && screen2.className === randomClasses[2]){
                score1.innerHTML = playerScore;
                playerScore++;
                
            }else if(screen1.className === randomClasses[0] && screen2.className === randomClasses[1]){
                score2.innerHTML = computerScore;
                computerScore++;
               
            }else if(screen1.className === randomClasses[1] && screen2.className === randomClasses[2]){
                score2.innerHTML = computerScore;
                computerScore++;
            }else if(screen1.className === randomClasses[1] && screen2.className === randomClasses[0]){
                score1.innerHTML = playerScore;
                playerScore++;
            }else if(screen1.className === randomClasses[2] && screen2.className === randomClasses[0]){
                score2.innerHTML = computerScore;
                computerScore++;
            }else if(screen1.className === randomClasses[2] && screen2.className === randomClasses[1]){
                score1.innerHTML = playerScore;
                playerScore++;
            }


            // ending the game
            if(playerScore > 5  || computerScore > 5){
                gameover()
            }
       })
    })

}    



function gameover(){
    playerOptions.forEach(element => {
        element.style.display = 'none';
    })
    if(playerScore > computerScore){
        final_result.innerHTML=`<h1> you won </h1>`;
        final_result.style.textAlign='center';
        final_result.style.color='#00ff00'
    }
    else{
        final_result.innerHTML=`<h1> you lost </h1>`;
        final_result.style.textAlign='center';
        final_result.style.color='#ff0000'
    }
    
    start.style.display='block';
    start.innerHTML='play again';
    start.addEventListener('click',() => {
        window.location.reload();
    })
}