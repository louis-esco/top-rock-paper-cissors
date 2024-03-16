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
        return "It's a tie game!";

    } else if (                                     // Player wins cases
        playerSelect === "rock" && computerSelect === "cissors" ||
        playerSelect === "paper" && computerSelect === "rock" ||
        playerSelect === "cissors" && computerSelect === "paper") {
        return `You win, ${playerSelect} beats ${computerSelect}!`

    } else if (                                 // Computer wins cases
        playerSelect === "rock" && computerSelect === "paper" ||
        playerSelect === "paper" && computerSelect === "cissors" ||
        playerSelect === "cissors" && computerSelect === "rock") {
        return `You loose, ${computerSelect} beats ${playerSelect}!`
    }
}

console.log(playRound('ROck', getComputerChoice()));