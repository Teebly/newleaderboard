const disciplines = ["Football", "Ice Hockey", "Athletics"];

Template.editPlayerForm.onRendered(function() {
  $(document).foundation();

  // console.log(this.data.Player.discipline);
  // console.log(this.data.Player._id);

  //   $("").on("mouseover", function() {
  //     alert("Hello World");
  //   $("#discipline option[value='" + this.data.Player.discipline + "']").prop(
  //     "selected",
  //     true
  //   );
  //   //   });
});

Template.editPlayerForm.events({
  "click #editPlayerButton": function(event) {
    event.preventDefault();
    let playerNameVar = $("input [name=playerName]").val();
    // let playerNameVar = event.target.playerName.value;
    // let playerLastNameVar = event.target.playerLastName.value;
    // let disciplineVar = event.target.discipline.value;
    // let playerNameVar = $("[name=playerName]").val();
    // let playerLastNameVar = $("[name=playerLastName]").val();
    // let disciplineVar = $("[name=discipline] option:checked").val();
    // let playerNameVar = $(
    //   "#playerName_Id value+'" + this.data.Player.firstname + "'"
    // ).val();
    let playerLastNameVar = $("[name=playerLastName]").val();
    // let playerNameVar = this.data.Player.firstname;
    // let playerLastNameVar = this.data.Player.lastname;
    // let disciplineVar = this.data.Player.discipline;
    console.log(playerNameVar);
    // let error = [];
    // let exists = PlayersList.findOne({
    //   firstname: playerNameVar,
    //   lastname: playerLastNameVar
    // });
    // if (exists) error.push("Sorry that user already exists.");
    // if (playerNameVar.length < 6) {
    //   error.push("Name is to short.");
    // }
    // if (playerLastNameVar.length < 6) {
    //   error.push("Lastname is to short.");
    // }
    // if (playerNameVar.length > 25) {
    //   error.push("Name is to long.");
    // }
    // if (playerLastNameVar.length > 25) {
    //   error.push("Lastname is to long.");
    // }
    // if (!disciplines.includes(disciplineVar)) {
    //   error.push("Choose a valid discipline.");
    // }
    // if (error.length) alert(error);
    // else {
    //   Meteor.call(
    //     "editPlayer",
    //     playerNameVar,
    //     playerLastNameVar,
    //     disciplineVar
    //   );
    // }
  }
});