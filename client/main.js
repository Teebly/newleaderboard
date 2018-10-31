import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
//import foundation
import Foundation from "foundation-sites/dist/js/foundation.js";
import "foundation-sites/dist/css/foundation.css";
<<<<<<< HEAD
//import fontawesome and icons
=======
>>>>>>> master
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
=======
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
>>>>>>> master

import "/imports/main.html";
import "/imports/styles/app.css";
//import leaderboard
import "/imports/templates/html/leaderboard.html";
import "/imports/templates/js/leaderboard.js";
//import playerCard
import "/imports/templates/html/playerCard.html";
import "/imports/templates/js/playerCard.js";
//import addPlayerForm
import "/imports/templates/html/addPlayerForm.html";
import "/imports/templates/js/addPlayerForm.js";
//import editPlayeForm
import "/imports/templates/html/editPlayerForm.html";
import "/imports/templates/js/editPlayerForm.js";
//import removePlayerForm
import "/imports/templates/html/removePlayerForm.html";
import "/imports/templates/js/removePlayerForm.js";

PlayersList = new Mongo.Collection("players");

//add icons to library
library.add(faPlus);
library.add(faMinus);
library.add(faPencilAlt);
library.add(faTrashAlt);

dom.watch();

library.add(faPlus);
library.add(faMinus);
library.add(faPencilAlt);
library.add(faTrashAlt);

dom.watch();

if (Meteor.isClient) {
  Meteor.subscribe("thePlayers");
<<<<<<< HEAD
=======
  Template.leaderboard.helpers({
    players: function() {
      let currentUserId = Meteor.userId();
      return PlayersList.find(
        { createdBy: currentUserId },
        { sort: { score: -1, firstname: 1 } }
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
  Template.addPlayerForm.onRendered(function() {
    $(document).foundation();
  });
  Template.addPlayerForm.events({
    "click .successButton": function(event) {
      event.preventDefault();
      let playerNameVar = $("[name=playerName]").val();
      let playerLastNameVar = $("[name=playerLastName]").val();
      let disciplineVar = $("[name=discipline] option:checked").val();
      let error = [];
      let exists = PlayersList.findOne({
        firstname: playerNameVar,
        lastname: playerLastNameVar
      });
      if (exists) error.push("Sorry that user already exists.");
      if (playerNameVar.length < 6) {
        error.push("Name is to short.");
      }
      if (playerLastNameVar.length < 6) {
        error.push("Lastname is to short.");
      }
      if (playerNameVar.length > 25) {
        error.push("Name is to long.");
      }
      if (playerLastNameVar.length > 25) {
        error.push("Lastname is to long.");
      }
      if (!disciplines.includes(disciplineVar)) {
        error.push("Choose a valid discipline.");
      }
      if (error.length) alert(error);
      else {
        Meteor.call(
          "createPlayer",
          playerNameVar,
          playerLastNameVar,
          disciplineVar
        );
      }
    }
  });

  Template.editPlayerForm.onRendered(function() {
    $(document).foundation();
  });

  Template.editPlayerForm.events({
    "click #editPlayer": function(event) {
      event.preventDefault();
      let playerNameVar = event.target.playerName.value;
      let playerLastNameVar = event.target.playerLastName.value;
      let disciplineVar = event.target.discipline.value;
      let error = [];
      let exists = PlayersList.findOne({
        firstname: playerNameVar,
        lastname: playerLastNameVar
      });
      if (exists) error.push("Sorry that user already exists.");
      if (playerNameVar.length < 6) {
        error.push("Name is to short.");
      }
      if (playerLastNameVar.length < 6) {
        error.push("Lastname is to short.");
      }
      if (playerNameVar.length > 25) {
        error.push("Name is to long.");
      }
      if (playerLastNameVar.length > 25) {
        error.push("Lastname is to long.");
      }
      if (!disciplines.includes(disciplineVar)) {
        error.push("Choose a valid discipline.");
      }
      if (error.length) alert(error);
      else {
        Meteor.call(
          "editPlayer",
          playerNameVar,
          playerLastNameVar,
          disciplineVar
        );
      }
    }
  });
  Template.removePlayerForm.onRendered(function() {
    $(document).foundation();
  });
  Template.removePlayerForm.events({
    "click #removePlayer": function(event) {
      PlayersList.remove({
        player: _id
      });
    }
  });
>>>>>>> master
}
