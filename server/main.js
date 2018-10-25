import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  // code to run on server at startup
});

PlayersList = new Mongo.Collection("players");

if (Meteor.isServer) {
  Meteor.publish("thePlayers", function() {
    let currentUserId = this.userId;
    return PlayersList.find({ createdBy: currentUserId });
  });
}

Meteor.methods({
  createPlayer: function(playerNameVar, playerLastNameVar, disciplineVar) {
    check(playerNameVar, String);
    check(playerLastNameVar, String);
    check(disciplineVar, String);
    let currentUserId = Meteor.userId();
    if (currentUserId) {
      PlayersList.insert({
        firstname: playerNameVar,
        lastname: playerLastNameVar,
        discipline: disciplineVar,
        score: 0,
        createdBy: currentUserId
      });
    }
  },
  editPlayer: function(playerNameVar, playerLastNameVar, disciplineVar) {
    check(playerNameVar, String);
    check(playerLastNameVar, String);
    check(disciplineVar, String);
    let currentUserId = Meteor.userId();
    if (currentUserId) {
      PlayersList.update(
        {
          _id: selectedPlayer,
          createdBy: currentUserId
        },
        {
          $set: {
            firstname: playerNameVar,
            lastname: playerLastNameVar,
            discipline: disciplineVar
          }
        }
      );
    }
  },
  removePlayer: function(selectedPlayer) {
    check(selectedPlayer, String);
    let currentUserId = Meteor.userId();
    if (currentUserId) {
      PlayersList.remove({
        _id: selectedPlayer,
        createdBy: currentUserId
      });
    }
  },
  updateScore: function(selectedPlayer, scoreValue) {
    check(selectedPlayer, String);
    check(scoreValue, Number);
    let currentUserId = Meteor.userId();
    if (currentUserId) {
      let currentUser = PlayersList.findOne({ _id: selectedPlayer });
      let currentScore = currentUser.score;
      if (currentScore + scoreValue < 0) {
        alert("Score can't be negative!");
      }
      PlayersList.update(
        { _id: selectedPlayer, createdBy: currentUserId },
        { $inc: { score: scoreValue } }
      );
    }
  }
});
