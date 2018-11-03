// API Key: 73526c5158647a3534730555e7b56b
// https://cors-anywhere.herokuapp.com/

// =========================================================================================
// GLOBAL VARIABLES
// =========================================================================================

var city = "";
var APIkey = "89635bfae26331da7c18c8fa78db7fac";
var CORSlink = "https://cors-anywhere.herokuapp.com/";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=" + APIkey;


// =========================================================================================
// FUNCTIONS
// =========================================================================================




// =========================================================================================
// MAIN PROCESS
// =========================================================================================



$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);

  console.log(response.main.temp);
    // Create CODE HERE to calculate the temperature (converted from Kelvin)
     // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
     var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed(0);
     console.log(tempF)

     var cityHolder = $("#city-holder");
     cityHolder.append("Temp: " + tempF)

for (var i = 0; i < response.weather.length; i++) {
  console.log(response.weather[i].description);
  var cityHolder = $("#city-holder");
      cityHolder.append("Description: " + response.weather[i].description)
}
  


});



// API Key: 73526c5158647a3534730555e7b56b
// NEED THIS: https://cors-anywhere.herokuapp.com/

// =========================================================================================
// GLOBAL VARIABLES
// =========================================================================================

var city = "Denver";
var APIkey = "73526c5158647a3534730555e7b56b";
var CORSlink = "https://cors-anywhere.herokuapp.com/"
// var queryURL = CORSlink + "https://api.meetup.com/find/locations?key=" + APIkey + "&sign=true&photo-host=public&page=20";
var queryURL = CORSlink + "https://api.meetup.com/find/upcoming_events?key=" + APIkey + "&sign=true&photo-host=public&topic_category=hiking&page=20"



// =========================================================================================
// FUNCTIONS
// =========================================================================================




// =========================================================================================
// MAIN PROCESS
// =========================================================================================



$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response);
  console.log(response.city.city);
  
  $("#city-holder").text("City: " + response.city.city);

  for (var i = 0; i < response.events.length; i++) {

    console.log(response.events[i].name + " " + response.events[i].link);
   
    // $("#event-holder").append(response.events[i].name + " " + response.events[i].link);
   
    var eventHolder = $("#event-holder");
    var list = $("<ul>")
     list.append(
      "<li>" + response.events[i].name + " " + response.events[i].link + 
      "</li>");
    
      eventHolder.append(list);

    }  

});

