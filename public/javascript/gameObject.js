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
  tie: function() {
    this.postResult();
  },
  firstPlay: function() {
    return this.playerHistory.length === 0;
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
