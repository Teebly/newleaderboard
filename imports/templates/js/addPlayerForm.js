const disciplines = ["Football", "Ice Hockey", "Athletics"];

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

      alert(playerNameVar + playerLastNameVar);
      playerNameVar = "";
      playerLastNameVar = "";
    }
  }
});
