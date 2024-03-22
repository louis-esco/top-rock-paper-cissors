const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resultsTable = document.querySelector('.resultsTable');
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
let playerScore = 0;
let computerScore = 0;
let roundNum = 0;

rockBtn.addEventListener('click', () => { playRound('rock', getComputerChoice()) })
paperBtn.addEventListener('click', () => { playRound('paper', getComputerChoice()) })
scissorsBtn.addEventListener('click', () => { playRound('scissors', getComputerChoice()) })

// Gets a random computer choice
function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    let randNum = Math.floor(Math.random() * 3);
    let computerChoice = options[randNum];
    return computerChoice;
}

// Plays a round and returns an array with winner and message to console.log
function playRound(playerSelection, computerSelection) {
    let playerSelect = playerSelection.toLocaleLowerCase();
    let computerSelect = computerSelection.toLocaleLowerCase();
    roundNum++;

    if (playerSelect === computerSelect) {          // Tie game case
        displayResult('tie');

    } else if (                                     // Player wins cases
        playerSelect === "rock" && computerSelect === "scissors" ||
        playerSelect === "paper" && computerSelect === "rock" ||
        playerSelect === "scissors" && computerSelect === "paper") {
        playerScore++;
        displayResult('player', playerSelect, computerSelect);

    } else if (                                 // Computer wins cases
        playerSelect === "rock" && computerSelect === "paper" ||
        playerSelect === "paper" && computerSelect === "scissors" ||
        playerSelect === "scissors" && computerSelect === "rock") {
        computerScore++;
        displayResult('computer', playerSelect, computerSelect);
    }
}

// Displays result
function displayResult(roundWinner, playerSelection, computerSelection) {
    const gameResult = document.createElement('p');
    while (playerScore < 5 && computerScore < 5) {
        if (roundWinner === 'tie') {
            gameResult.textContent = `Round ${roundNum}: It's a tie round`;
        } else if (roundWinner === 'player') {
            gameResult.textContent = `Round ${roundNum}: You win, ${playerSelection} beats ${computerSelection}!`;
        } else if (roundWinner === 'computer') {
            gameResult.textContent = `Round ${roundNum}: Computer wins, ${computerSelection} beats ${playerSelection}!`;
        }
        resultsTable.appendChild(gameResult);
        pScore.textContent = `${playerScore}`;
        cScore.textContent = `${computerScore}`;
        return;
    }

    if (playerScore > computerScore) {
        gameResult.textContent = `Game result: Player wins ${playerScore} to ${computerScore}.`;
    } else if (playerScore < computerScore) {
        gameResult.textContent = `Game result: Computer wins ${computerScore} to ${playerScore}.`;
    }
    pScore.textContent = `${playerScore}`;
    cScore.textContent = `${computerScore}`;
    gameResult.style.fontWeight = 'bold';
    resultsTable.appendChild(gameResult);
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}
