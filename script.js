// FUNCTION #1: Getting computer's randomized choice 
function getComputerChoice() {
  let computerOptions = ['rock', 'paper', 'scissors'];

  let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

  return computerChoice;
}

function getPlayerSelection(){
  let playerChoice = prompt("Will you choose rock, paper, or scissors?");

  return playerChoice;
}

//FUNCTION #2: Play a round of the game
function playRound(){
  playerSelection = getPlayerSelection();
  computerSelection = getComputerChoice();
  if (playerSelection == computerSelection) {
      return `You both chose ${playerSelection}. It's a tie!`;
  } else if (playerSelection == "rock" && computerSelection == "scissors"
      || playerSelection == "paper" && computerSelection == "rock"
      || playerSelection == "scissors" && computerSelection == "rock") {
      return `${playerSelection} beats ${computerSelection}, You win!!`;
  } else {
      return `${computerSelection} beats ${playerSelection}. Sorry, you lose.`;
  }
}