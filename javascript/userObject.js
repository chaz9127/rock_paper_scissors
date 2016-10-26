var UserObject = {
  "totalWins": 0,
  "type": "user",
  win: function() {
    this.totalWins++;
    userWins.innerHTML = this.totalWins;
  }
};
