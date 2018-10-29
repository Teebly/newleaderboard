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
