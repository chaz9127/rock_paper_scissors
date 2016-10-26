var ComputerObject = {
  "totalWins": 0,
  "type": "computer",
  win: function() {
    this.totalWins++;
    computerWins.innerHTML = this.totalWins;
  },
  handChoice: function(){
    var predictUser = this.predictUserPlay();
    var pick = WINNING_COMBINATIONS[predictUser]
    computerHand.innerHTML =  pick;
    return pick;
  },
  predictUserPlay: function() {
    var pick = Math.floor(Math.random()*(2-0+1)+0);
    var prediction = CHOICES[pick];
    console.log("Computer predicts user will play: " + prediction)
    return prediction
  }
};
