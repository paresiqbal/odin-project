function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let humanInput = prompt("Rock, Paper, or Scissors?").toLowerCase();

  return humanInput;
}

console.log(getHumanChoice());

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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const rounds = 5;

  for (let i = 0; i < rounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    if (result === "You win!") {
      humanScore++;
    } else if (result === "You lose!") {
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
