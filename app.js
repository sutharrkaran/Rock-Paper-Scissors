const computerFun = function () {
  const computerPlay = Math.trunc(Math.random() * 3);
  const computerArr = ["Rock", "Paper", "Scissor"];
  return computerArr[computerPlay];
};

function playRound(playerSelection, computerSelection) {
  if (!playerSelection) {
    console.log(`PLease Chooss from "Rock", "Paper", "Scissor"`);
  } else if (playerSelection === computerSelection) {
    console.log(`Both Chooss ${playerSelection}`);
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log(`${playerSelection} Beats ${computerSelection}`);
  } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
    console.log(`${playerSelection} Looss ${computerSelection}`);
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    console.log(`${playerSelection} Looss ${computerSelection}`);
  } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    console.log(`${playerSelection} Beats ${computerSelection}`);
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    console.log(`${playerSelection} Beats ${computerSelection}`);
  } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
    console.log(`${playerSelection} Looss ${computerSelection}`);
  }
}
const playerSelection = prompt('Chooss From "Rock", "Paper", "Scissor"');
const computerSelection = computerFun();
playRound(playerSelection, computerSelection);
