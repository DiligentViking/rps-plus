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


function playGame() {
  let humanScore = 0
  let computerScore = 0

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
    document.querySelector('#youChoice').textContent = `You: ${humanChoice}`;
    document.querySelector('#cpuChoice').textContent = `CPU: ${computerChoice}`;
    document.querySelector('#matchMsg').textContent = `${msg}`;
    document.querySelector('#score').textContent = `Score: You ${humanScore} :: CPU ${computerScore}`;
  }

  function checkWinner(winScore) {
    const winMsg = document.querySelector('#winMsg');
    if (humanScore >= winScore) {
      winMsg.textContent = 'THE HUMAN IS THE WINNER';
    } else if (computerScore >= winScore) {
      winMsg.textContent = 'THE COMPUTER IS THE WINNER';
    }
  }

  // consider optimizing into one event listener
  const rockBtn = document.querySelector('#rock');
  rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    checkWinner(5);
  });  // a func inside a func?
  const paperBtn = document.querySelector('#paper');
  paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    checkWinner(5);
  })
  const scissorBtn = document.querySelector('#scissor');
  scissorBtn.addEventListener('click', () => {
    playRound('scissor', getComputerChoice());
    checkWinner(5);
  })

}



playGame()
