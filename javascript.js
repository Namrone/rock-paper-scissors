function getComputerChoice(){
    let choice = (Math.floor(Math.random()*100))%3;
    if (choice == 0){
        return "rock";
    }
    else if (choice == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return 0;
    }
    else if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock')||(playerSelection == 'scissors'&& computerSelection == 'paper')){
        return 1;
    }
    else{
        return 2;
    }
}

function createThreeChoice(){
    const rockChoice = document.querySelector("rock");
    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    
    const paperChoice = document.querySelector("paper");
    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";
    
    const scissorsChoice = document.querySelector("scissors");
    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissor";

    rockChoice.appendChild(rockBtn);
    paperChoice.appendChild(paperBtn);
    scissorsChoice.appendChild(scissorsBtn);
    
    rockBtn.addEventListener("click", () => "rock");
    paperBtn.addEventListener("click", () => "paper");
    scissorsBtn.addEventListener("click", () => "scissors");
}

function deleteChoice(){
    rockChoice.removeChild(rockBtn);
    paperChoice.removeChild(paperBtn);
    scissorsBtn.removeChile(scissorsBtn);
}

const scoreBoard = document.querySelector("content");
const playAgain = document.createElement("button");
playAgain.textContent = "Play Again";

function deleteScore(){
    scoreBoard.removeChild(playAgain);
    scoreBoard.removeChild(score);
}

function displayScore(playerWin, computerWin){
    const score = document.createElement("p")
    score.textContent = "The score is Player Wins: " + playerWin + " to Computer Wins: " + computerWin;

    scoreBoard.appendChild(playAgain);
    scoreBoard.appendChild(score);

    playAgain.addEventListener("click", deleteScore());
}

function playGame(){
    const playerSelection = createThreeChoice();
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if(result == 1){
        playerWin += 1;
        deleteChoice();
        displayScore(playerWin, computerWin);
    }
    else if(result == 2){
        computerWin += 1;
        deleteChoice();
        displayScore(playerWin, computerWin);
    }
    else{
        deleteChoice();
        displayScore(playerWin, computerWin);
    }
}

let playerWin = 0, computerWin = 0;
playGame();