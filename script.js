function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomElement = choices[Math.floor(Math.random()* choices.length)];
    return randomElement;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "Winner!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "Winner!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You lose! Scissors beats Paper";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "Winner!"
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You lose! Rock beats Scissors!";
    }
}

let userScore = 0;
let computerScore = 0;
/*
function playGame(){
    while((userScore < 5) && (computerScore < 5)) {
        let comp = getComputerChoice();
        let playerSelection = prompt(`Pick Rock, Paper or Scissors`);
        console.log(playerSelection);
        let playerSelection1 = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
        playRound(playerSelection1, comp);
    };

    if (userScore > computerScore) {
        console.log(`You won ${userScore} to ${computerScore}`);
    }
    else if (userScore < computerScore) {
        console.log(`You lost ${userScore} to ${computerScore}`);
    }
}
*/
function playGame(){
    while((userScore < 5) && (computerScore < 5)) {
        let comp = getComputerChoice();
        let playerSelection = prompt(`Pick Rock, Paper or Scissors`);
        console.log(playerSelection);
        
        // Check if playerSelection is not null
        if (playerSelection !== null) {
            let playerSelection1 = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
            let result = playRound(playerSelection1, comp); // Capture the result of playRound
            
            // Update scores based on the result
            if (result.includes("Winner!")) {
                userScore += 1;
            } else if (result.includes("You lose")) {
                computerScore += 1;
            }
            
            console.log(result); // Log the result of the round
        } else {
            // If playerSelection is null, break the loop or handle as needed
            console.log("Game cancelled by the user.");
            break;
        }
    };

    if (userScore > computerScore) {
        console.log(`You won ${userScore} to ${computerScore}`);
    }
    else if (userScore < computerScore) {
        console.log(`You lost ${userScore} to ${computerScore}`);
    }
    else {
        console.log("The game ended in a tie.");
    }
}