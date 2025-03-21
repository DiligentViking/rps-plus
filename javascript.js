function getComputerChoice() {
  let randNum = Math.random();  // ill play with this in console to get a feel for this which wasn't covered by TOP
  
  if (randNum > 0.66666) {
    return 'paper';
  } else if (randNum > 0.33333) {
    return 'scissor';
  } else {
    return 'rock';
  }
}


function playGame(winScore) {
  let gameWon = false;

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    let msg

    if (humanChoice == 'rock') {
      if (computerChoice == 'rock') {
        msg = "It's a tie! Rock bumps against rock.";
      } else if (computerChoice == 'paper') {
        msg = "You lose! Paper permeates rock. (somehow)";
        computerScore += 1;
      } else if (computerChoice == 'scissor') {
        msg = "You win! Rock clobbers scissor";
        humanScore += 1;
      }
    } else if (humanChoice == 'paper') {
      if (computerChoice == 'rock') {
        msg = "You win! Paper permeates rock. (somehow)";
        humanScore += 1;
      } else if (computerChoice == 'paper') {
        msg = "It's a tie! Paper slithers on paper.";
      } else if (computerChoice == 'scissor') {
        msg = "You lose! Scissor cuts down paper";
        computerScore += 1;
      }
    } else if (humanChoice == 'scissor') {
      if (computerChoice == 'rock') {
        msg = "You lose! Rock clobbers scissor";
        computerScore += 1;
      } else if (computerChoice == 'paper') {
        msg = "You win! Scissor cuts down paper";
        humanScore += 1;
      } else if (computerChoice == 'scissor') {
        msg = "It's a tie! Scissor wedge on scissor.";
      }
    }

    // we update instead of add (which i could do by creating the p elems or something)
    const results = document.querySelector('#results');
    document.querySelector('#youChoice').textContent = `You:\t${humanChoice}`;
    document.querySelector('#cpuChoice').textContent = `CPU:\t${computerChoice}`;
    document.querySelector('#matchMsg').textContent = `${msg}`;
    document.querySelector('#score').textContent = `Score: You ${humanScore} :: CPU ${computerScore}`;
  }

  function checkWinner() {
    const winMsg = document.querySelector('#winMsg');
    if (humanScore >= winScore) {
      winMsg.textContent = 'THE HUMAN IS THE WINNER';
      return true;
    } else if (computerScore >= winScore) {
      winMsg.textContent = 'THE COMPUTER IS THE WINNER';
      return true;
    }
  }

  const selection = document.querySelector('#selection');
  selection.addEventListener('click', (event) => {
    const choice = event.target.id;
    const validChoices = ['rock', 'paper', 'scissor'];
    if (validChoices.includes(choice)) {
      playRound(choice, getComputerChoice());
      if (checkWinner()) selection.remove();
    }
  })
}



playGame(5)
