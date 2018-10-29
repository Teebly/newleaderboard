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
