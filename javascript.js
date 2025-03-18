// console.log("Hello World")
// ima just gonna follow the steps


function getComputerChoice() {
  let randNum = Math.random();  // ill play with this in console to get a feel for this which wasn't covered by TOP
  
  if (randNum > 0.66666) {
    return 'paper';
  } else if (randNum > 0.33333) {
    return 'scissors';
  } else {
    return 'rock';
  }
}


function getHumanChoice() {
  return prompt('rock, paper, scissor.')
}


let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase()
  // Initialize two vars
  let msgPart1
  let msgPart2
  // If human and computer have the same move, log "It's a tie! Paper slithers on paper."

  // If human has paper [clunky way for now]
    // If computer has scissor
      // msgPart1 is "You lose!"
      // msgPart2 is "Scissor cuts down paper."
    // If computer has rock
      // msgPart1 is "You win!"
      // msgPart2 is "Paper permeates rock. (somehow)"
  // If human has scissor
    // If computer has rock
      // msgPart1 is "You lose!"
      // msgPart2 is "Rock clobbers scissors."
    // If compouter has paper
      // msgPart1 is "You win!"
      // msgPart2 is "Scissor cuts down paper."
  // If human has rock
    // If computer has paper
      // msgPart1 is "You lose!"
      // msgPart2 is "Paper permeates rock. (somehow"
    // If computer has scissor
      // msgPart1 is "You win!"
      // msgPart2 is "Rock clobbers scissors."

}