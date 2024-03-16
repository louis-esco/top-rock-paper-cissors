function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Cissors'];
    let randNum = Math.floor(Math.random() * 3);
    let computerChoice = options[randNum];
    return computerChoice;
}