// FUNCTION #1: Getting computer's randomized choice 
function getComputerChoice() {
  let computerOptions = ['rock', 'paper', 'scissors'];

  let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

  return computerChoice;
}

function getPlayerSelection() {
  let playerChoice = prompt("Will you choose rock, paper, or scissors?");

  return playerChoice;
}

//FUNCTION #2: Play a round of the game
function playRound() {
  let playerSelection = getPlayerSelection();
  let computerSelection = getComputerChoice();
  if (playerSelection == computerSelection) {
      console.log(`You both chose ${playerSelection}. It's a tie!`);
      return 0;
  } else if (playerSelection == "rock" && computerSelection == "scissors"
      || playerSelection == "paper" && computerSelection == "rock"
      || playerSelection == "scissors" && computerSelection == "rock") {
      console.log(`${playerSelection} beats ${computerSelection}, You win!!`);
      return 1;
  } else {
      console.log(`${computerSelection} beats ${playerSelection}. Sorry, you lose.`)
      return -1;
  }
}

//Function #3: Play a gam,e (5 rounds)
function playGame() {
  let winTally = 0;
  for (let i = 0; i < 5; i++) {
      let round = playRound();
      winTally = winTally + round;
  }
  if(winTally > 0) {
      return "You won!!";
  } else if (winTally < 0) {
      return "Sorry, you lost";
  } else {
      return "It was a tie!"
  }
}

//console.log(playGame())