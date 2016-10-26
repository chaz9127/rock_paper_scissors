/* Main Logic Here */
var rockButton = document.getElementById('rock');
var paperButton = document.getElementById('paper');
var scissorsButton = document.getElementById('scissors');
var computerHand = document.getElementById('computer-hand');
var userHand = document.getElementById('user-hand');
var winPercent = document.getElementById('win-percent');
var totalGames = document.getElementById('total-games');
var computerWins = document.getElementById('computer-wins');
var userWins = document.getElementById('user-wins');
var TRAINING_DATA = ['rock', 'paper', 'rock', 'scissors', 'rock', 'paper', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'scissors', 'rock', 'scissors', 'paper', 'rock', 'scissors', 'paper', 'rock', 'rock', 'scissors', 'rock', 'paper', 'paper', 'paper', 'rock', 'scissors', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'paper', 'rock', 'scissors', 'scissors', 'paper', 'rock', 'rock', 'paper', 'scissors', 'rock', 'rock', 'paper', 'scissors', 'paper', 'rock', 'rock', 'paper', 'paper', 'scissors', 'rock', 'paper', 'paper', 'rock', 'rock', 'rock', 'rock', 'scissors', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'rock', 'scissors', 'paper', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'paper', 'rock', 'rock', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'paper', 'rock', 'scissors', 'paper', 'scissors', 'rock', 'paper', 'rock', 'scissors', 'scissors', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'rock', 'paper', 'rock', 'scissors', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'paper', 'rock', 'scissors', 'paper', 'scissors', 'rock', 'paper', 'rock', 'scissors', 'paper', 'rock', 'paper', 'scissors', 'paper', 'rock', 'paper', 'scissors', 'scissors', 'paper', 'rock', 'rock', 'paper', 'scissors', 'scissors', 'paper', 'rock', 'paper', 'scissors', 'paper', 'rock', 'rock', 'rock', 'rock', 'paper', 'scissors', 'scissors', 'scissors', 'paper', 'scissors', 'rock', 'rock', 'paper', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'paper', 'paper', 'scissors', 'rock', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'paper', 'rock', 'rock', 'scissors', 'paper', 'rock', 'rock', 'paper', 'scissors', 'paper', 'rock', 'paper', 'rock', 'scissors', 'paper', 'rock', 'paper', 'scissors', 'paper', 'rock', 'scissors', 'paper', 'rock', 'paper', 'scissors', 'rock']
var WINNING_COMBINATIONS = {
  //userHand: computerHand
  'rock': 'paper',
  'paper': 'scissors',
  'scissors': 'rock'
}
var CHOICES = ['rock', 'paper', 'scissors'];

rockButton.onclick = buttonClicked;
paperButton.onclick = buttonClicked;
scissorsButton.onclick = buttonClicked;

function buttonClicked() {
  var computerPlay = ComputerObject.handChoice();
  var playerHand = this.getAttribute("data-hand")
  userHand.innerHTML = playerHand
  GameObject.lastPlay.computerHand = computerPlay;
  GameObject.lastPlay.playerHand = playerHand;
  GameObject.playerHistory.push(playerHand)
  GameObject.compareResults(computerPlay, playerHand);
}

function automate() {
  for (var i = 0; i < TRAINING_DATA.length; i++) {
    switch(TRAINING_DATA[i]) {
      case "rock":
        rockButton.click();
        break;
      case "paper":
        paperButton.click();
        break;
      case "scissors":
        scissorsButton.click();
        break;
    }
  }
}
