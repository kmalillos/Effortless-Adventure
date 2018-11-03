// API Key: 73526c5158647a3534730555e7b56b
// https://cors-anywhere.herokuapp.com/

// =========================================================================================
// GLOBAL VARIABLES
// =========================================================================================

var city = "Denver";
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
     var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed(0);
     console.log(tempF)

     var cityHolder = $("#city-holder");
     cityHolder.append("Temp: " + tempF)

for (var i = 0; i < response.weather.length; i++) {
  console.log(response.weather[i].description);
  var cityHolder = $("#city-holder");
      // cityHolder.append("Description: " + response.weather[i].description)
}
var weatherHolder = $("#weather-holder").html("<h1>" + response.weather[i] + "</h1>");
  // weatherHolder.append("#city-holder");

  


});


