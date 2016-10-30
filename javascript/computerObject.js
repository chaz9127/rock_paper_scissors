var ComputerObject = {
  "totalWins": 0,
  "type": "computer",
  win: function() {
    this.totalWins++;
    computerWins.innerHTML = this.totalWins;
  },
  handChoice: function() {
    var predictUser = this.predictUserPlay();
    var pick = WINNING_COMBINATIONS[predictUser];
    return pick;
  },
  predictUserPlay: function() {
    if(GameObject.firstPlay())
      return "rock";

    doublePlay = this.doublePlay();
    if(doublePlay)
      return doublePlay;

    lostLastHand = this.lostLastHand();
    if(lostLastHand)
      return lostLastHand;

    var pick = Math.floor(Math.random()*3);
    var prediction = CHOICES[pick]
    return prediction
  },
  doublePlay: function(){
    var playerHistory = GameObject.playerHistory;
    var playerHistoryLength = playerHistory.length
    var lastPlay1 = playerHistory[playerHistoryLength-2];
    var lastPlay2 = playerHistory[playerHistoryLength-1];
    var prediction = null;

    var lastPlayHand = GameObject.lastPlay.playerHand
    if(lastPlay1 != undefined && lastPlay1[lastPlayHand]) {
      var pick = (Math.floor(Math.random()*2)+1) - 1;
      var possiblePicks = [
        lastPlayHand,
        WINNING_COMBINATIONS[lastPlayHand]
      ];
      prediction = possiblePicks[pick];
    };
    return prediction;
  },
  lostLastHand: function() {
    var prediction = null;

    var lastPlayHand = GameObject.lastPlay.playerHand
    if(GameObject.lastPlay.victor == "computer") {
      var pick = (Math.floor(Math.random()*2)+1) - 1;
      var possiblePicks = [
        WINNING_COMBINATIONS[lastPlayHand],
        WINNING_COMBINATIONS[WINNING_COMBINATIONS[lastPlayHand]]
      ];
      prediction = possiblePicks[pick];
    }
    return prediction
  }

};
