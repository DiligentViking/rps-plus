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

    console.log(`You: ${humanChoice}`)
    console.log(`CPU: ${computerChoice}`)
    console.log(msg)
    console.log(`Score: You ${humanScore} :: CPU ${computerScore}`)
    console.log('----------')
  }

  // consider optimizing into one event listener
  const rockBtn = document.querySelector('#rock');
  rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
  });  // a func inside a func?
  const paperBtn = document.querySelector('#paper');
  paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
  })
  const scissorBtn = document.querySelector('#scissor');
  scissorBtn.addEventListener('click', () => {
    playRound('scissor', getComputerChoice());
  })
}



playGame()
