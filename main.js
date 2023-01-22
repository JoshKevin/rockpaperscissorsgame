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