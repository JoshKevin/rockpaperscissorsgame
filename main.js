let playerSelection = prompt("Do you choose rock, paper or scissors?");
console.log("Player chose " + playerSelection);

let array = ['rock', 'paper', 'scissors'];

function getComputerSelection(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log("Computer chose " + item);
    return item;
}

const computerSelection = getComputerSelection(array);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") console.log("You Lose!");
    else if (playerSelection === "rock" && computerSelection === "scissors") console.log("You win!");
    else if (playerSelection === "scissors" && computerSelection === "rock") console.log("You Lose");
    else if (playerSelection === "scissors" && computerSelection === "paper") console.log("You win!");
    else if (playerSelection === "paper" && computerSelection === "scissors") console.log("You Lose");
    else if (playerSelection === "paper" && computerSelection === "rock") console.log("You win!");
}

playRound(playerSelection, computerSelection);

