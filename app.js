function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Cissors'];
    let randNum = Math.floor(Math.random() * 3);
    let computerChoice = options[randNum];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let playerSelect = playerSelection.toLocaleLowerCase();
    let computerSelect = computerSelection.toLocaleLowerCase();

    if (playerSelect === computerSelect) {          // Tie game case
        return ['tie', "It's a tie round!"];

    } else if (                                     // Player wins cases
        playerSelect === "rock" && computerSelect === "cissors" ||
        playerSelect === "paper" && computerSelect === "rock" ||
        playerSelect === "cissors" && computerSelect === "paper") {
        return ['player', `You win, ${playerSelect} beats ${computerSelect}!`];

    } else if (                                 // Computer wins cases
        playerSelect === "rock" && computerSelect === "paper" ||
        playerSelect === "paper" && computerSelect === "cissors" ||
        playerSelect === "cissors" && computerSelect === "rock") {
        return ['computer', `You loose, ${computerSelect} beats ${playerSelect}!`];
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerInput();
        let roundResult = playRound(playerSelection, getComputerChoice());
        if (roundResult[0] === "player") { playerScore++; }
        else if (roundResult[0] === "computer") { computerScore++; }
        console.log(roundResult[1]);
    }
    displayResult();
}

function playerInput() {
    let input = prompt('Rock, paper or cissors ?').toLocaleLowerCase();
    while (input !== "rock" && input !== "paper" && input !== "cissors") {
        input = prompt('Please choose between rock, paper or cissors ?').toLocaleLowerCase();
    }
    return input;
}

function displayResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log(`Player wins ${playerScore} to ${computerScore}.`);
    } else if (playerScore < computerScore) {
        console.log(`Computer wins ${computerScore} to ${playerScore}.`);
    } else {
        console.log("It's a tie game, no one wins!");
    }
}

playGame();