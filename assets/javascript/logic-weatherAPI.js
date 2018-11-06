// Weather API Key: 89635bfae26331da7c18c8fa78db7fac

// =========================================================================================
// GLOBAL VARIABLES
// =========================================================================================

var city = "Denver";
var APIkey = "89635bfae26331da7c18c8fa78db7fac";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=+" + city + "&appid=" + APIkey;


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
 
  // city
  console.log(response.name);
  var cityHolder = $("#city-holder");
      cityHolder.text("City: " + response.name)

  // temperature
  console.log(response.main.temp);
     var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed(0);
     console.log(tempF)

     var tempHolder = $("#temp-holder")
        tempHolder.text("Temp: " + tempF)


  // weather description
  for (var i = 0; i < response.weather.length; i++) {
    
    console.log(response.weather[i].description);

    var weatherHolder = $("#weather-holder");
    var description = response.weather[i].description;

    weatherHolder.append(description);

  }
  
//icon

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Denver&apikey=89635bfae26331da7c18c8fa78db7fac", function( data ) {
 console.log(data);
 console.log(data.weather);
 console.log(data.weather[0]);
 console.log(data.weather[0].icon);

 var icon = data.weather[0].icon
 var url = 'http://openweathermap.org/img/w/' + icon + '.png'
 console.log(url);

   $(".icon").html("<img class = 'newIcon' src=" + url + ">");

});

  // var iconCode = data.weather[0].icon;

  //          
  // var iconUrl =

  //   "http://openweathermap.org/img/w/" + iconCode + ".png"; 


});
