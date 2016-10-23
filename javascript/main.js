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

rockButton.onclick = buttonClicked;
paperButton.onclick = buttonClicked;
scissorsButton.onclick = buttonClicked;

var gameObject = {
  "totalGames": 0,
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

function buttonClicked(event) {
  var computerPlay = computerHandChoice();
  userHand.style.color = "#000";
  computerHand.style.color = "#000";
  var hand = this.getAttribute("data-hand")
  userHand.innerHTML = hand
  compareResults(computerPlay, hand);
}

function computerHandChoice(){
  var pick = Math.floor(Math.random()*(2-0+1)+0);
  var choices = ["rock", "paper", "scissors"];
  var choice = choices[pick];
  computerHand.innerHTML =  choice;
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
  if(winner) {
    var winnerElement = document.getElementById(winner.type + "-hand");
    winnerElement.style.color = "green";
  }else {
    userHand.style.color = "#8b0000";
    computerHand.style.color = "#8b0000";
  }
  gameObject.addGame();
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
