let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let plays = ["Rock", "Paper", "Scissors"];
    return plays[Math.floor(Math.random()*plays.length)];
}

function play(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == "ROCK") {
        const display = document.querySelector(".display");
        const playerScoreDisplay = document.querySelector(".playerscore");
        const computerScoreDisplay = document.querySelector(".computerscore");
        switch(computerSelection.toUpperCase()) {
            case "ROCK":
                display.textContent = "Draw";
                break;
            case "PAPER":
                display.textContent = "You Lose! Paper beats Rock";
                computerScore++;
                computerScoreDisplay.textContent = "Computer Score: " + computerScore;
                break;
            case "SCISSORS":
                display.textContent = "You Win! Rock beats Scissors";
                playerScore++;
                playerScoreDisplay.textContent = "Player Score: " + playerScore;
                break;
        }
    } else if (playerSelection.toUpperCase() == "PAPER") {
        const display = document.querySelector(".display");
        const playerScoreDisplay = document.querySelector(".playerscore");
        const computerScoreDisplay = document.querySelector(".computerscore");
        switch(computerSelection.toUpperCase()) {
            case "ROCK":
                display.textContent = "You Win! Paper beats Rock";
                playerScore++;
                playerScoreDisplay.textContent = "Player Score: " + playerScore;
                break;
            case "PAPER":
                display.textContent = "Draw";
                break;
            case "SCISSORS":
                display.textContent = "You Lose! Scissors beats Paper";
                computerScore++;
                computerScoreDisplay.textContent = "Computer Score: " + computerScore;
                break;
        }
    } else if (playerSelection.toUpperCase() == "SCISSORS") {
        const display = document.querySelector(".display");
        const playerScoreDisplay = document.querySelector(".playerscore");
        const computerScoreDisplay = document.querySelector(".computerscore");
        switch(computerSelection.toUpperCase()) {
            case "ROCK":
                display.textContent = "You Lose! Rock beats Scissors";
                computerScore++;
                computerScoreDisplay.textContent = "Computer Score: " + computerScore;
                break;
            case "PAPER":
                display.textContent = "You Win! Scissors beats Paper";
                playerScore++;
                playerScoreDisplay.textContent = "Player Score: " + playerScore;
                break;
            case "SCISSORS":
                display.textContent = "Draw";
                break;
        }
    }
    if (playerScore == 5) {
        const display = document.querySelector(".display");
        const playerScoreDisplay = document.querySelector(".playerscore");
        const computerScoreDisplay = document.querySelector(".computerscore");
        display.textContent = "Player Wins";
        playerScoreDisplay.textContent = "Player Score: 0";
        computerScoreDisplay.textContent = "Computer Score: 0";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        const display = document.querySelector(".display");
        const playerScoreDisplay = document.querySelector(".playerscore");
        const computerScoreDisplay = document.querySelector(".computerscore");
        display.textContent = "Computer Wins";
        playerScoreDisplay.textContent = "Player Score: 0";
        computerScoreDisplay.textContent = "Computer Score: 0";
        playerScore = 0;
        computerScore = 0;
    }
}

const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", function() {
    play("rock", getComputerChoice())
});

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", function() {
    play("paper", getComputerChoice())
});

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", function() {
    play("scissors", getComputerChoice())
});