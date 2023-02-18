let resultPanel = document.querySelector('#resultPanel');
let compChoices = ['Rock', 'Paper', 'Scissors'];
let playerChoicePanel = document.querySelector('#playerChoicePanel');
let compChoicePanel = document.querySelector('#compChoicePanel');
let winner = document.querySelector('#winner');
let round = document.querySelector('#round');
let choicesPanel = document.querySelector('#choicesPanel');
let choicebtn = document.querySelectorAll('.choicebtn');
i = 0;

resultPanel.setAttribute('style', 'margin-left:450px;')
choicesPanel.setAttribute('style', 'display: flex; justify-content: space-around;')

choicebtn.forEach((choicebtn) => {
    choicebtn.addEventListener('click', () => {
        playerChoice = choicebtn.textContent;
        playerChoicePanel.textContent = "You Chose: " + `${playerChoice}`;
        let compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
        compChoicePanel.textContent = "They Chose: " + `${compChoice}`;
        if (playerChoice === compChoice) winner.textContent = "Who Won: Draw!";
        else if ((playerChoice === "Rock" && compChoice === "Scissors") || (playerChoice === "Paper" && compChoice === "Rock") || (playerChoice === "Scissors" && compChoice === "Paper")) winner.textContent = "Who Won: We Won!";
        else winner.textContent = "Who Won: They Won"
        i++;
        round.textContent = "Round: " + `${i}`;
    });
});

