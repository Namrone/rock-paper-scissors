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

const rockChoice = document.querySelector(".rock");
const rockBtn = document.createElement("BUTTON");
rockBtn.textContent = "Rock";

const paperChoice = document.querySelector(".paper");
const paperBtn = document.createElement("BUTTON");
paperBtn.textContent = "Paper";

const scissorsChoice = document.querySelector(".scissors");
const scissorsBtn = document.createElement("BUTTON");
scissorsBtn.textContent = "Scissor";

rockChoice.parentNode.insertBefore(rockBtn, rockChoice.nextSibling);
paperChoice.parentNode.insertBefore(paperBtn, paperChoice.nextSibling);
scissorsChoice.parentNode.insertBefore(scissorsBtn, scissorsChoice.nextSibling);

function startGame(){    
    rockBtn.addEventListener("click", () => playGame("rock"));
    paperBtn.addEventListener("click", () => playGame("paper"));
    scissorsBtn.addEventListener("click", () => playGame("scissors"));
}

const scoreBoard = document.querySelector(".content");
const playAgain = document.createElement("BUTTON");
playAgain.textContent = "Play Again";

const score = document.createElement("p");

const playerComputerChoices = document.querySelector(".title");
const choices = document.createElement("p");

function removeScore(){
    scoreBoard.removeChild(playAgain);
    scoreBoard.removeChild(score);
    playerComputerChoices.removeChild(choices);
}

function displayScore(playerWin, computerWin){
    score.textContent = "The score is Player Wins: " + playerWin + " to Computer Wins: " + computerWin;
    scoreBoard.appendChild(playAgain);
    scoreBoard.appendChild(score);

    playAgain.addEventListener("click", function playClick(){
        removeScore();
        startGame();
        playAgain.removeEventListener("click", playClick);
    });
}

function playGame(playerSelection){
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if(result == 1){
        playerWin += 1;
        choices.textContent = "You win! " + playerSelection + " beats " + computerSelection;
        playerComputerChoices.appendChild(choices);
    }
    else if(result == 2){
        computerWin += 1;
        choices.textContent = "You lost, " + playerSelection + " loses to " + computerSelection;
        playerComputerChoices.appendChild(choices);
    }
    else{
        choices.textContent = "It was a tie! " + playerSelection + " = " + computerSelection;
        playerComputerChoices.appendChild(choices);
    }
    displayScore(playerWin, computerWin);
}

let playerWin = 0, computerWin = 0;
startGame();