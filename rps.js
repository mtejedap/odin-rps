let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let plays = ["Rock", "Paper", "Scissors"];
    return plays[Math.floor(Math.random()*plays.length)];
}

function play(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == "ROCK") {
        switch(computerSelection.toUpperCase()) {
            case "ROCK":
                return "Draw";
            case "PAPER":
                computerScore++;
                return "You Lose! Paper beats Rock";
            case "SCISSORS":
                playerScore++;
                return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection.toUpperCase() == "PAPER") {
        switch(computerSelection.toUpperCase()) {
            case "ROCK":
                playerScore++;
                return "You Win! Paper beats Rock";
            case "PAPER":
                return "Draw";
            case "SCISSORS":
                computerScore++;
                return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection.toUpperCase() == "SCISSORS") {
        switch(computerSelection.toUpperCase()) {
            case "ROCK":
                computerScore++;
                return "You Lose! Rock beats Scissors";
            case "PAPER":
                playerScore++;
                return "You Win! Scissors beats Paper";
            case "SCISSORS":
                return "Draw";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter your move here");
        console.log(play(playerSelection, getComputerChoice()));
    }
    if (playerScore > computerScore) {
        console.log("Player Wins");
    } else if (playerScore < computerScore) {
        console.log("Computer Wins");
    } else {
        console.log("Game Draw");
    }
}

game();