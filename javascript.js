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
        return 0;
    }
    else if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock')||(playerSelection == 'scissors'&& computerSelection == 'paper')){
        return 1;
    }
    else{
        return 2;
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
    let result = playRound(playerSelection, computerSelection, playerWin, computerWin);
    if(result == 1){
        playerWin += 1;
        console.log("You Win! " + playerSelection + " beats " + computerSelection + ". The score is Player Wins: " + playerWin + " to Computer Wins: " + computerWin);
    }
    else if(result == 2){
        computerWin += 1;
        console.log("You Lose! "+ playerSelection + " loses to " + computerSelection + ". The score is Player Wins: " + playerWin + " to Computer Wins: " + computerWin);
    }
    else{
        console.log("It's a tie. The score is Player Wins: " + playerWin + " to Computer Wins: " + computerWin);
    }
}

let playerWin = 0, computerWin = 0;
for(let plays = 0; plays < 5; plays++){
    playGame();
}