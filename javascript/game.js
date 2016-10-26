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

var GameObject = {
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
  },
  compareResults: function(comp, user){
    if(comp == user) {
      this.tie();
      return
    }
    switch(comp) {
      case "rock":
        (user == "paper") ? this.victor(UserObject) : this.victor(ComputerObject);
        break;
      case "paper":
        (user == "scissors") ? this.victor(UserObject) : this.victor(ComputerObject);
        break;
      case "scissors":
        (user == "rock") ? this.victor(UserObject) : this.victor(ComputerObject);
        break;
    }
  },
  victor: function(player) {
    player.win();
    this.postResult(player);
  },
  tie: function(){
    this.postResult();
  },
  postResult: function(winner) {
    if(winner) {
      this.lastPlay.victor = winner.type;
      var winnerElement = document.getElementById(winner.type + "-hand");
      winnerElement.style.color = "green";
    }else {
      this.lastPlay.victor = "tie";
      userHand.style.color = "#8b0000";
      computerHand.style.color = "#8b0000";
    }
    this.addGame();
    this.createMatchHistoryRow();
    winPercent.innerHTML = Math.floor((ComputerObject.totalWins / this.totalGames) * 100) + "%";
    totalGames.innerHTML = this.totalGames;
  },
  createMatchHistoryRow: function() {
    var table = document.getElementById("match-history-table");
    var row = table.insertRow(0);
    var handPlay = row.insertCell(0);
    var handOutcome = row.insertCell(1);
    handPlay.className =  "hand-play";
    handOutcome.className =  "hand-outcome";

    var playText = this.lastPlay.computerHand + " - " + this.lastPlay.playerHand
    var outcomeText = "";

    switch(this.lastPlay.victor) {
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
};
