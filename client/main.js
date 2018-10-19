import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import Foundation from "foundation-sites/dist/js/foundation.js";
import "foundation-sites/dist/css/foundation.css";
import "./main.html";
import "/client/styles/app.css";

PlayersList = new Mongo.Collection("players");

if (Meteor.isClient) {
  Template.leaderboard.helpers({
    players: function() {
      var currentUserId = Meteor.userId();
      return PlayersList.find(
        { createdBy: currentUserId },
        { sort: { score: -1, name: 1 } }
      );
    }
  });

  Template.leaderboard.onRendered(function() {
    $(document).foundation();
  });

  Template.PlayerCard.events({
    "click .increment": function(event, instance) {
      Meteor.call("updateScore", instance.data.Player._id, 5);
    },
    "click .decrement": function(event, instance) {
      Meteor.call("updateScore", instance.data.Player._id, -5);
    },
    "click .remove": function(event, instance) {
      Meteor.call("removePlayer", instance.data.Player._id);
    }
  });
  Template.addPlayerForm.events({
    "submit form": function(event) {
      event.preventDefault();
      var playerNameVar = event.target.playerName.value;
      let error = [];
      let exists = PlayersList.findOne({ name: playerNameVar });
      if (exists) error.push("Sorry that user already exists.");
      if (playerNameVar.length < 6) {
        error.push("Name is to short.");
      }
      if (playerNameVar.length > 36) {
        error.push("Name is to long.");
      }
      if (error.length) alert(error);
      else {
        Meteor.call("createPlayer", playerNameVar);
      }
      event.target.playerName.value = "";
    }
  });
  Meteor.subscribe("thePlayers");
}

Meteor.methods({
  createPlayer: function(playerNameVar) {
    check(playerNameVar, String);
    var currentUserId = Meteor.userId();
    if (currentUserId) {
      PlayersList.insert({
        name: playerNameVar,
        score: 0,
        createdBy: currentUserId
      });
    }
  },
  removePlayer: function(selectedPlayerId) {
    check(selectedPlayerId, String);
    var currentUserId = Meteor.userId();
    if (currentUserId) {
      PlayersList.remove({
        _id: selectedPlayerId,
        createdBy: currentUserId
      });
    }
  },
  updateScore: function(selectedPlayerId, scoreValue) {
    check(selectedPlayer, String);
    check(scoreValue, Number);
    var currentUserId = Meteor.userId();
    if (currentUserId) {
      let currentUser = PlayersList.findOne({ _id: selectedPlayerId });
      let currentScore = currentUser.score;
      if (currentScore + scoreValue < 0) {
        alert("Score can't be negative!");
      }
      PlayersList.update(
        { _id: selectedPlayerId, createdBy: currentUserId },
        { $inc: { score: scoreValue } }
      );
    }
  }
});
