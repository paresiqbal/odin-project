// first make a function to get computer input, by randomly pick from an array
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// second input user choice base on prompt
function getHumanChoice() {
  let humanInput = prompt("Rock, Paper, or Scissors?").toLowerCase();

  return humanInput;
}

console.log(getHumanChoice());

// third make a function to play a round that determines and logic of the game
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}`);
    return "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return "win";
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return "lose";
  }
}

// take inputs and play a round
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// execute the round
playRound(humanSelection, computerSelection);

// fivth make a function to play game
function playGame() {
  // create score and round
  let humanScore = 0;
  let computerScore = 0;
  const rounds = 5;

  // loop for 5 round and get the input
  for (let i = 0; i < rounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    if (result === "win") {
      humanScore++;
    } else if (result === "lose") {
      computerScore++;
    }
  }

  if (humanScore > computerScore) {
    console.log("You are the overall winner!");
  } else if (computerScore > humanScore) {
    console.log("The computer is the overall winner!");
  } else {
    console.log("The game is a tie overall!");
  }
}

playGame();
