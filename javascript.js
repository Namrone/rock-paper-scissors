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

function playRound(playerSelection, computerSelection, playerWin, computerWin){
    if(playerSelection == computerSelection){
        return "It's a tie " + ". The score is Player Wins: " + playerWin + " to Computer Wins: " + computerWin;
    }
    else if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock')||(playerSelection == 'scissors'&& computerSelection == 'paper')){
        playerWin = playerWin + 1;
        return "You Win! " + playerSelection + " beats " + computerSelection + ". The score is Player Wins: " + playerWin + " to Computer Wins: " + computerWin;
    }
    else{
        computerWin = computerWin + 1;
        return "You Lose! "+ playerSelection + " loses to " + computerSelection + ". The score is Player Wins: " + playerWin + " to Computer Wins: " + computerWin;
    }
}

function playGame(){
    let playerInput = prompt("Please choose either Rock, Paper, or Scissors").toLowerCase();
    let stuck=null;
    while(stuck==null){
        if(playerInput == 'rock' || playerInput == 'paper' || playerInput == 'scissors' || playerInput == 'scissor'){
            stuck = 1;
        }
        else{
            playerInput = prompt("That was an invalid response. Please choose either Rock, Paper, or Scissors").toLowerCase();
        }
    }
    const playerSelection = playerInput;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection, playerWin, computerWin));
}

let plays = 0;
let playerWin = 0, computerWin = 0;
while(plays < 5){
    playGame();
    plays++;
}