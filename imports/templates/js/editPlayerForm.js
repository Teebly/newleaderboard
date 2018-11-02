const disciplines = ["Football", "Ice Hockey", "Athletics"];

Template.editPlayerForm.onRendered(function() {
  $(document).foundation();

  // $(document).ready(function() {
  //   $(".editButton").click(function() {
  //     $(":input", "#editPlayer_{{Player._id}}").each(function() {
  //       alert(this.name + ": " + this.value);
  //     });
  //   });
  // });

  // $("#new_user_form *")
  //   .filter(":input")
  //   .each(function() {
  //     //your code here
  //   });

  let editDisciplineVar = $(
    "#discipline option[value='" + this.data.Player.discipline + "']"
  )
    .prop("selected", true)
    .val();
  console.log(editDisciplineVar);

  $("select", ".editForm").each(function() {
    console.log(this.value);
  });
});

Template.editPlayerForm.events({
  "submit .editForm": function(event) {
    event.preventDefault();

    console.log("On Submit", event);
    let editPlayerFormId = event.currentTarget.id;
    console.log(editPlayerFormId);
    let editPlayerFirstNameVar = $(event.currentTarget)
      .find("input#editPlayerFirstName")
      .val();

    let editPlayerLastNameVar = $(event.currentTarget)
      .find("input#editPlayerLastName")
      .val();

    let editDisciplineVar = $(event.currentTarget)
      .find("select#discipline")
      .find(":selected")
      .val();

    console.log(
      editPlayerFirstNameVar,
      editPlayerLastNameVar,
      editDisciplineVar
    );
  }
  // "click #editPlayerButton": function(event) {
  //   event.preventDefault();
  //   console.log("event", event);
  //   // tmpEdit = $("form#editPlayer").this.attr("playerId");
  //   tmpFirst = $("input#editPlayerFirstName");
  //   let editPlayerFirstNameVar = tmpFirst.val();
  //   tmpLast = $("input#editPlayerLastName");
  //   let editPlayerLastNameVar = tmpLast.val();
  //   let playerId = tmpFirst.attr("playerId");
  //   console.log(editPlayerFirstNameVar, editPlayerLastNameVar, playerId);
  // console.log(tmpEdit);
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
  //     disciplineVar,
  //     playerId
  //   );
  // }
  //}
});
