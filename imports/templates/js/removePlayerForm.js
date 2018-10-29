Template.removePlayerForm.onRendered(function() {
  $(document).foundation();
});
Template.removePlayerForm.events({
  "click #removePlayer": function(event, instance) {
    Meteor.call("removePlayer", instance.data.Player._id);
  }
});
