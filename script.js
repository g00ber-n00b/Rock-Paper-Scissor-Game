let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let gameOver = false;


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You Win!";
    } else {
        return "You Lose!";
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
       let playerSelection = prompt("Rock, Paper or Scissors?");
       playerSelction = playerSelection.toLowerCase();
       const computerSelection = getComputerChoice();
       const result = playRound(playerSelection, computerSelection);
       if (result.includes("You win!")) {
        playerScore++;
       } else if (result.includes("You lose!")) {
        computerScore++;
       }
    }

    console.log("Final Scores:");
    console.log("Player:", playerScore);
    console.log("Computer:", computerScore);

    if (playerScore > computerScore) {
        return "Congratulations! You won the game!";
    } else if (computer > playerScore) {
        return "You lost the game. Womp womp.";
    } else {
        return "It's a tie!";
    }
}

function playGame(playerSelection) {
  if (gameOver) return;

  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);

  document.querySelector('#game p').textContent = result;

  if (result.includes("You Win!")) {
    playerScore++;
  } else if (result.includes("You Lose!")) {
    computerScore++;
  }

  document.getElementById('player-score').textContent = "Player Score: " + playerScore;
  document.getElementById('computer-score').textContent = "Computer Score: " + computerScore;

  if (playerScore === 5 || computerScore === 5) {
    gameOver = true;
    document.querySelector('#game p').textContent += ` — Game Over! ${playerScore === 5 ? "You win!" : "You lose!"}`;
  }
}


document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));