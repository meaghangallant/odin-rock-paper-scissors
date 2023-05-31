// FUNCTION #1: Getting computer's randomized choice 

function getComputerChoice() {
  let computerOptions = ['rock', 'paper', 'scissors'];

  let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

  return computerChoice;
}

console.log(getComputerChoice());

//FUNCTION #2: Play a round of the game
function playRound(playerSelection, computerSelection) {
  playerSelection = choose;
  computerSelection = getComputerChoice();

  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (playerSelection == "rock" && computerSelection == "scissors" 
    || playerSelection == "paper" && computerSelection == "rock" 
    || playerSelection == "scissors" && computerSelection == "rock") {
      return 'You win!!';
    } else {
      return "Sorry, you lose";
    }


  /*
  Rock beats scissors
  Paper beats rock
  Scissors beats rock 
  */
}

console.log(playRound(rock));

//Function #3: Play a game (5 rounds)
//function playGame(){}