import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
//import foundation
import Foundation from "foundation-sites/dist/js/foundation.js";
import "foundation-sites/dist/css/foundation.css";
//import fontawesome and icons
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

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
}
