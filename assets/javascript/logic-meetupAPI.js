// Google Maps APIkey: AIzaSyD_Ko_8jQz0fztSy-EG6klDU0Rw8rr5AT0 
// Meetup API Key: 73526c5158647a3534730555e7b56b
// NEED THIS with Meetup: https://cors-anywhere.herokuapp.com/


// =========================================================================================
// EVENT LISTENER FOR ON-CLICK OF CITY-BUTTON
// =========================================================================================

$(document).on("click", ".city-button", function () {

  // console.log($(this).attr("city"));

  // =========================================================================================
  // GOOGLE MAPS API AJAX CALL
  // =========================================================================================

  var city = $(this).attr("city");
  var googleAPIkey = "AIzaSyD_Ko_8jQz0fztSy-EG6klDU0Rw8rr5AT0";
  var googleQueryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=" + googleAPIkey;

  $.ajax({
    url: googleQueryURL,
    method: "GET"
  }).then(function (response) {
    //console.log(response);
    console.log("City: " + response.results[0].address_components[0].short_name);
    console.log("Lat: " + response.results[0].geometry.location.lat);
    console.log("Long: " + response.results[0].geometry.location.lng);

    var lat = response.results[0].geometry.location.lat;
    var long = response.results[0].geometry.location.lng;

    // =========================================================================================
    // MEETUP API AJAX CALL
    // =========================================================================================

    var APIkey = "73526c5158647a3534730555e7b56b";
    var CORSlink = "https://cors-anywhere.herokuapp.com/"
    var queryURL = CORSlink + "https://api.meetup.com/find/upcoming_events?key=" + APIkey + "&sign=true&photo-host=public&lon=" + long + "&page=10&lat=" + lat;
    // https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=-104.990251&page=10&lat=39.7392358

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      
      // console.log(response);

      var eventHolder = $("#event-holder");

      eventHolder.empty();

      for (var i = 0; i < response.events.length; i++) {

        //console.log(response);
        console.log(response.events[i]);

        // $("#event-holder").append(response.events[i].name + " " + response.events[i].link);

        var list = $("<ul>")
        list.append("<li>" + response.events[i].name + "</li>");
        
        // var list = $("<ul>")
        // list.append(
        //   "<li>" + response.events[i].name + " " + response.events[i].link +
        //   "</li>");

        // var list = $("<ul>")
        // list.append(
        //   "<li>" + response.events[i].name +  " " + response.events[i].description + "</li>");

        eventHolder.append(list);

      }; // CLOSE FOR LOOP

    }); // CLOSE MEETUP-API AJAX CALL

  }); // CLOSE GOOGLE-MAPS-API AJAX CALL

}); // CLOSE EVENT LISTENER FOR ON-CLICK FOR CLICK-BUTTON



// =========================================================================================
// C O D E  T H A T  W O R K S
// =========================================================================================

// MEET UP API AJAX CALL

// var APIkey = "73526c5158647a3534730555e7b56b";
// var CORSlink = "https://cors-anywhere.herokuapp.com/"
// var queryURL = CORSlink + "https://api.meetup.com/find/upcoming_events?key=" + APIkey + "&sign=true&photo-host=public&page=10"

// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function (response) {
//   console.log(response);

//   for (var i = 0; i < response.events.length; i++) {

//     console.log(response.events[i].name + " " + response.events[i].link);

//     // $("#event-holder").append(response.events[i].name + " " + response.events[i].link);

//     var eventHolder = $("#event-holder");
//     var list = $("<ul>")
//      list.append(
//       "<li>" + response.events[i].name + " " + response.events[i].link + 
//       "</li>");

//       eventHolder.append(list);

//     }  

// });