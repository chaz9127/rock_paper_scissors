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
var trainingData = ['rock', 'paper', 'rock', 'scissors', 'rock', 'paper', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'scissors', 'rock', 'scissors', 'paper', 'rock', 'scissors', 'paper', 'rock', 'rock', 'scissors', 'rock', 'paper', 'paper', 'paper', 'rock', 'scissors', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'paper', 'rock', 'scissors', 'scissors', 'paper', 'rock', 'rock', 'paper', 'scissors', 'rock', 'rock', 'paper', 'scissors', 'paper', 'rock', 'rock', 'paper', 'paper', 'scissors', 'rock', 'paper', 'paper', 'rock', 'rock', 'rock', 'rock', 'scissors', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'rock', 'scissors', 'paper', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'paper', 'rock', 'rock', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'paper', 'rock', 'scissors', 'paper', 'scissors', 'rock', 'paper', 'rock', 'scissors', 'scissors', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'rock', 'paper', 'rock', 'scissors', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'paper', 'rock', 'scissors', 'paper', 'scissors', 'rock', 'paper', 'rock', 'scissors', 'paper', 'rock', 'paper', 'scissors', 'paper', 'rock', 'paper', 'scissors', 'scissors', 'paper', 'rock', 'rock', 'paper', 'scissors', 'scissors', 'paper', 'rock', 'paper', 'scissors', 'paper', 'rock', 'rock', 'rock', 'rock', 'paper', 'scissors', 'scissors', 'scissors', 'paper', 'scissors', 'rock', 'rock', 'paper', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'paper', 'paper', 'scissors', 'rock', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'paper', 'rock', 'rock', 'scissors', 'paper', 'rock', 'rock', 'paper', 'scissors', 'paper', 'rock', 'paper', 'rock', 'scissors', 'paper', 'rock', 'paper', 'scissors', 'paper', 'rock', 'scissors', 'paper', 'rock', 'paper', 'scissors', 'rock']
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

var gameObject = {
  "totalGames": 0,
  "lastPlay": {
    //computerHand
    //playerHand
    //victor
  },
  "playerHistory": [],
  addGame: function() {
    this.totalGames++;
    totalGames.innerHTML = this.totalGames;
  }
};

var computerObject = {
  "totalWins": 0,
  "type": "computer",
  win: function() {
    this.totalWins++;
    computerWins.innerHTML = this.totalWins;
  }
};

var userObject = {
  "totalWins": 0,
  "type": "user",
  win: function() {
    this.totalWins++;
    userWins.innerHTML = this.totalWins;
  }
};

function buttonClicked() {
  var computerPlay = computerHandChoice();
  userHand.style.color = "#000";
  computerHand.style.color = "#000";
  var playerHand = this.getAttribute("data-hand")
  userHand.innerHTML = playerHand
  gameObject.lastPlay.computerHand = computerPlay;
  gameObject.lastPlay.playerHand = playerHand;
  gameObject.playerHistory.push(playerHand)
  compareResults(computerPlay, playerHand);
}

function computerHandChoice(){
  var predictUser = predictUserPlay();
  var pick = WINNING_COMBINATIONS[predictUser]
  computerHand.innerHTML =  pick;
  return pick;
}

function predictUserPlay() {
  var pick = Math.floor(Math.random()*(2-0+1)+0);
  var prediction = CHOICES[pick];
  console.log("Computer predicts user will play: " + prediction)
  return prediction

}

function victor(player) {
  player.win();
  postResult(player);
}

function tie(){
  postResult();
}

function postResult(winner) {
  if(winner) {
    gameObject.lastPlay.victor = winner.type;
    var winnerElement = document.getElementById(winner.type + "-hand");
    winnerElement.style.color = "green";
  }else {
    gameObject.lastPlay.victor = "tie";
    userHand.style.color = "#8b0000";
    computerHand.style.color = "#8b0000";
  }
  gameObject.addGame();
  createMatchHistoryRow();
  winPercent.innerHTML = Math.floor((computerObject.totalWins / gameObject.totalGames) * 100) + "%";
  totalGames.innerHTML = gameObject.totalGames;
}

function compareResults(comp, user) {
  if(comp == user) {
    tie();
    return
  }
  switch(comp) {
    case "rock":
      (user == "paper") ? victor(userObject) : victor(computerObject);
      break;
    case "paper":
      (user == "scissors") ? victor(userObject) : victor(computerObject);
      break;
    case "scissors":
      (user == "rock") ? victor(userObject) : victor(computerObject);
      break;
  }
}

function createMatchHistoryRow() {
  var table = document.getElementById("match-history-table");
  var row = table.insertRow(0);
  var handPlay = row.insertCell(0);
  var handOutcome = row.insertCell(1);
  handPlay.className =  "hand-play";
  handOutcome.className =  "hand-outcome";

  var playText = gameObject.lastPlay.computerHand + " - " + gameObject.lastPlay.playerHand
  var outcomeText = "";

  switch(gameObject.lastPlay.victor) {
    case "user":
      outcomeText = "W";
      handOutcome.className +=  " win";
      break;
    case "computer":
      outcomeText = "L";
      handOutcome.className +=  " lose";
      break;
    case "tie":
      outcomeText = "T";
      handOutcome.className +=  " tie";
      break;
  }

  handPlay.innerHTML = playText;
  handOutcome.innerHTML = outcomeText;
}

function automate() {
  for (var i = 0; i < trainingData.length; i++) {
    switch(trainingData[i]) {
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
