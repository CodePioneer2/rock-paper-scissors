const gameOptions = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  return gameOptions[Math.floor(Math.random() * 3)];
};

const getHumanChoice = () => {
  let userInput = prompt("Select rock, paper or scissors").toLowerCase();
  if (gameOptions.includes(userInput)) {
    return userInput;
  } else {
    console.log("Please type correct input!");
    return getHumanChoice();
  }
};

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;
  const playRound = (humanChoice, computerChoice) => {
    console.log("human choice:" + humanChoice);
    console.log("computer choice:" + computerChoice);
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === computerChoice) {
      return `It's tie! You both selected ${computerChoice}`;
    } else {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
  };

  let i = 0;
  while (i < 5) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    i++;
  }
};
