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
    const rockChoice = document.querySelector(".rock");
    const rockBtn = document.createElement("BUTTON");
    rockBtn.textContent = "Rock";
    rockBtn.className = "button";

    const paperChoice = document.querySelector(".paper");
    const paperBtn = document.createElement("BUTTON");
    paperBtn.textContent = "Paper";
    paperBtn.className = "button";

    const scissorsChoice = document.querySelector(".scissors");
    const scissorsBtn = document.createElement("BUTTON");
    scissorsBtn.textContent = "Scissor";
    scissorsBtn.className = "button";

    rockChoice.appendChild(rockBtn);
    paperChoice.appendChild(paperBtn);
    scissorsChoice.appendChild(scissorsBtn);
    
    rockBtn.addEventListener("click", () => "rock");
    paperBtn.addEventListener("click", () => "paper");
    scissorsBtn.addEventListener("click", () => "scissors");
}

function deleteButton(){
    const removal = document.getElementsByClassName("button");
    while(removal.length > 0){removal[0].parentNode.removeChild(removal[0]);}
}

function displayScore(playerWin, computerWin){
    const scoreBoard = document.querySelector(".content");
    const playAgain = document.createElement("BUTTON");
    playAgain.textContent = "Play Again";
    playAgain.className = "button";

    const score = document.createElement("p")
    score.textContent = "The score is Player Wins: " + playerWin + " to Computer Wins: " + computerWin;
    score.className = "button";

    scoreBoard.appendChild(playAgain);
    scoreBoard.appendChild(score);

    playAgain.addEventListener("click", deleteButton());
}

function playGame(){
    const playerSelection = createThreeChoice();
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if(result == 1){
        playerWin += 1;
        deleteButton();
        displayScore(playerWin, computerWin);
    }
    else if(result == 2){
        computerWin += 1;
        deleteButton();
        displayScore(playerWin, computerWin);
    }
    else{
        deleteButton();
        displayScore(playerWin, computerWin);
    }
}

let playerWin = 0, computerWin = 0;
playGame();