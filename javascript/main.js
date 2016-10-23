/* Main Logic Here */
var rockButton = document.getElementById('rock');
var paperButton = document.getElementById('paper');
var scissorsButton = document.getElementById('scissors');
var diplayResult = document.getElementById('result');
var computerHand = document.getElementById('computer-hand');
var winPercent = document.getElementById('win-percent');
var totalGames = document.getElementById('total-games');

rockButton.onclick = buttonClicked;
paperButton.onclick = buttonClicked;
scissorsButton.onclick = buttonClicked;

var gameObject = {
  "totalGames": 0,
  addGame: function() {
    this.totalGames++;
  }
};

var computerObject = {
  "totalWins": 0,
  "type": "computer",
  win: function() {
    this.totalWins++;
  }
};

var userObject = {
  "totalWins": 0,
  "type": "user",
  win: function() {
    this.totalWins++;
  }
};

function buttonClicked(event) {
  var computerPlay = computerHandChoice();
  compareResults(computerPlay, this.value);
}

function computerHandChoice(){
  var pick = Math.floor(Math.random()*(2-0+1)+0);
  var choices = ["rock", "paper", "scissors"];
  var choice = choices[pick];
  computerHand.innerHTML = "<h2 id='computer-hand'>" + choice + "</h2>";
  return choice;
}

function victor(player) {
  player.win();
  postResult(player)
}

function tie(){
  postResult();
}

function postResult(winner) {
  var result = "It's a tie!"
  if(winner) {
    result = "The <strong>" + winner.type + "</strong> wins!";
  }
  gameObject.addGame();
  diplayResult.innerHTML = result;
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
