const options = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
  return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  const playerSelectionLowerCase = playerSelection.toLowerCase();
  const computerSelectionLowerCase = computerSelection.toLowerCase();
  const choicesMadeMessage = `The player picked ${playerSelectionLowerCase} and the computer picked ${computerSelectionLowerCase}. `;
  const computerWinsMessage = `The computer wins because ${computerSelectionLowerCase} beats ${playerSelectionLowerCase}.`;
  const playerWinsMessage = `The player wins because ${playerSelectionLowerCase} beats ${computerSelectionLowerCase}.`;
  const drawMessage = `It's a draw`;

  if (playerSelectionLowerCase === computerSelectionLowerCase) {
    return choicesMadeMessage + drawMessage;
  } else if (playerSelectionLowerCase === 'rock') {
    if (computerSelectionLowerCase === 'paper') {
      return choicesMadeMessage + computerWinsMessage;
    } else {
      return choicesMadeMessage + playerWinsMessage;
    }
  } else if (playerSelectionLowerCase === 'paper') {
    if (computerSelectionLowerCase === 'scissors') {
      return choicesMadeMessage + computerWinsMessage;
    } else {
      return choicesMadeMessage + playerWinsMessage;
    }
  } else {
    //scissors
    if (computerSelectionLowerCase === 'rock') {
      return choicesMadeMessage + computerWinsMessage;
    } else {
      return choicesMadeMessage + playerWinsMessage;
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Rock, paper, or scissors');
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
