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

        //buttons work here
        clickButton();

    // Handle the errors
    }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);

    }); // close database event listener
    
};

// function clickButton() {
//     $(".city-button").one("click", function() {
//         //console.log("CLICK");
//         console.log($(this).attr("city"));
//     }); 
// }

// click Button with Weather API 
function clickButton() {
    $(".city-button").on("click", function() {
        console.log($(this).attr("city"));

        var city = $(this).attr("city");
        var APIkey = "89635bfae26331da7c18c8fa78db7fac";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=+" + city + "&appid=" + APIkey;

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            
            //console.log(response);
           
            // city
            //console.log(response.name);
            var cityHolder = $("#city-holder");
                cityHolder.text("City: " + response.name)
          
            // temperature
            //console.log(response.main.temp);
               var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed(0);
               //console.log(tempF)
          
               var tempHolder = $("#temp-holder")
                  tempHolder.text("Temp: " + tempF)
          
          
            // weather description
            for (var i = 0; i < response.weather.length; i++) {
              
              //console.log(response.weather[i].description);
          
              var weatherHolder = $("#weather-holder");
              var description = response.weather[i].description;
          
              weatherHolder.append(description);
          
            }
          
          }); // close AJAX call


    }); // close city-button event listener
};

// =================================================================================================================================
// Main Process
// =================================================================================================================================

addCity();

displayButtons();

