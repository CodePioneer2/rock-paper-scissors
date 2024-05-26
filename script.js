const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const resultText = document.getElementById('result-text');
const humanScoreText = document.getElementById('human-score');
const computerScoreText = document.getElementById('computer-score');
const gameOptions = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});
paperBtn.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});
scissorsBtn.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});

const getComputerChoice = () => {
  return gameOptions[Math.floor(Math.random() * 3)];
};

const getHumanChoice = () => {
  let userInput = prompt('Select rock, paper or scissors').toLowerCase();
  if (gameOptions.includes(userInput)) {
    return userInput;
  } else {
    console.log('Please type correct input!');
    return getHumanChoice();
  }
};

const playRound = (humanChoice, computerChoice) => {
  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    humanScoreText.innerText = humanScore;
    resultText.innerText = `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
  } else if (humanChoice === computerChoice) {
    resultText.innerText = `It's tie! Both selected ${computerChoice.toUpperCase()}`;
  } else {
    computerScore++;
    computerScoreText.innerText = computerScore;
    resultText.innerText = `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`;
  }
  if (humanScore > 4 || computerScore > 4) {
    resultText.innerHTML = humanScore > 4 ? 'You win the game!!!' : 'You lose the game!';
    humanScore = 0;
    computerScore = 0;
    humanScoreText.innerText = humanScore;
    computerScoreText.innerText = computerScore;
  }
};
