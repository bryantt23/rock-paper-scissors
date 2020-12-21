const options = ['Rock', 'Paper', 'Scissors'];
let playerWins = 0,
  computerWins = 0;
const neededWins = 2;

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
      computerWins++;
      return choicesMadeMessage + computerWinsMessage;
    } else {
      playerWins++;
      return choicesMadeMessage + playerWinsMessage;
    }
  } else if (playerSelectionLowerCase === 'paper') {
    if (computerSelectionLowerCase === 'scissors') {
      computerWins++;
      return choicesMadeMessage + computerWinsMessage;
    } else {
      playerWins++;
      return choicesMadeMessage + playerWinsMessage;
    }
  } else {
    //scissors
    if (computerSelectionLowerCase === 'rock') {
      computerWins++;
      return choicesMadeMessage + computerWinsMessage;
    } else {
      playerWins++;
      return choicesMadeMessage + playerWinsMessage;
    }
  }
}

let buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.innerText);
    const playerSelection = button.innerText;
    game(playerSelection);
  });
});

function game(playerSelection) {
  const computerSelection = computerPlay();
  const gameResult = playRound(playerSelection, computerSelection);
  tallyWins();
  const resultDiv = document.querySelector('#game-result');
  const p = document.createElement('p');
  p.textContent = gameResult;
  if (resultDiv.hasChildNodes()) {
    resultDiv.removeChild(resultDiv.firstChild);
  }
  resultDiv.appendChild(p);
}

function tallyWins() {
  const totalWins = document.querySelector('#total-wins');
  const p = document.createElement('p');
  p.textContent = `Player has ${playerWins} wins and the computer has ${computerWins} wins`;

  if (playerWins === neededWins || computerWins === neededWins) {
    const gameArea = document.querySelector('#game');
    const gameResult = document.querySelector('#game-result');
    gameArea.style = 'display:none';
    if (playerWins === neededWins) {
      p.textContent = 'Player wins';
    } else {
      p.textContent = 'Computer wins';
    }
    gameResult.appendChild(p);
    totalWins.removeChild(totalWins.firstChild);
  } else {
    if (totalWins.hasChildNodes()) {
      totalWins.removeChild(totalWins.firstChild);
    }
    totalWins.appendChild(p);
  }
}
