  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDpNqqdHaSx9AkHv-Bd6QtR66-nTzul9LM",
    authDomain: "groupproject1-1038d.firebaseapp.com",
    databaseURL: "https://groupproject1-1038d.firebaseio.com",
    projectId: "groupproject1-1038d",
    storageBucket: "groupproject1-1038d.appspot.com",
    messagingSenderId: "300487945283"
  };

  firebase.initializeApp(config);

// =================================================================================================================================
// Initial Variables
// =================================================================================================================================
var database = firebase.database();

var city = "";

// =================================================================================================================================
// Functions
// =================================================================================================================================

function addCity() {

    $("#add-city").on("click", function(event) {
        event.preventDefault();
    
        //capture values of add-city form input
        city = $("#city-input").val().trim();

        //push values to database
        database.ref().push({
            city: city
        });
    }); 
};

function displayButtons() {
    
    database.ref().on("child_added", function(snapshot) {

        // to capture snapshot value
        var snapshot = snapshot.val();
        var city = snapshot.city;

        // HOOK TO HTML
        var buttonHolder = $("#button-holder");
        var button = $("<button>")
            button.addClass("city-button")
            button.addClass("btn btn-primary")
            button.attr("city", city)
            button.append(city);

        buttonHolder.append(button);

    // Handle the errors
    }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);

    }); // close database event listener
    
};

// function clickButton() {
//     $(document).on("click", ".city-button", function() {
//         //console.log("CLICK");
//         console.log($(this).attr("city"));
//     }); 
// }


// =================================================================================================================================
// Main Process
// =================================================================================================================================

addCity();

displayButtons();

// clickButton();

