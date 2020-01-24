// Google Maps APIkey: AIzaSyBcNazEdzZzyCY6oPSBO7UIgDZgno5vxlA
// Meetup API Key: 73526c5158647a3534730555e7b56b
// NEED THIS with Meetup: https://cors-anywhere.herokuapp.com/


// =========================================================================================
// ON PAGE LOAD
// =========================================================================================

var quotes = 
  ["''Adventure is out there.''", 
  "''Oh, the places you'll go''",   
  "''Life is either a daring adventure or nothing.''",
  "''The magic happens outside of your comfort zone''",
  "''Remember that every good friend was once a stranger''", 
  "''There are no strangers here. Only friends you haven't met''",  
  "''I'm in love with cities I've never been to and people I've never met.''",
  "''One way to get the most out of life is to look upon it as an adventure.''"]

var randomVal  = Math.floor(Math.random() * quotes.length);

// console.log(quotes[randomVal]);

var quoteText = $("#quote-text");
    quoteText.addClass("quote-style")
    quoteText.text(quotes[randomVal]);  

// =========================================================================================
// EVENT LISTENER FOR ON-CLICK OF CITY-BUTTON
// =========================================================================================

$(document).on("click", ".city-button", function () {

  // console.log($(this).attr("city"));

  $("#quote-text").hide();  

  // =========================================================================================
  // GOOGLE MAPS API AJAX CALL
  // =========================================================================================

  var city = $(this).attr("city");
  var googleAPIkey = "AIzaSyA_nYBaMy24N19jV0MZ8vJRvNOlOGblbSc";
  var googleQueryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=" + googleAPIkey;

  $.ajax({
    url: googleQueryURL,
    method: "GET"
  }).then(function (response) {
    //console.log(response);
    // console.log("City: " + response.results[0].address_components[0].short_name);
    // console.log("Lat: " + response.results[0].geometry.location.lat);
    // console.log("Long: " + response.results[0].geometry.location.lng);

    var lat = response.results[0].geometry.location.lat;
    var long = response.results[0].geometry.location.lng;

    // =========================================================================================
    // MEETUP API AJAX CALL
    // =========================================================================================

    var meetupAPIkey = "73526c5158647a3534730555e7b56b";
    var CORSlink = "https://cors-anywhere.herokuapp.com/"
    var meetupQueryURL = CORSlink + "https://api.meetup.com/find/upcoming_events?key=" + meetupAPIkey + "&sign=true&photo-host=public&lon=" + long + "&page=15&lat=" + lat;
    // https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=-104.990251&page=10&lat=39.7392358

    var newQuery = "https://api.meetup.com1/find/groups2?zip=11211&radius=1&category=253&order=members4";

    $.ajax({
      // url: meetupQueryURL,
      url: newQuery,
      method: "GET"
    }).then(function (response) {
    
      console.log("Meetup ", response);

      var eventText = $("#event-text");
      eventText.addClass("section-header");
      eventText.text("Find Your Next Adventure in " + city);

      var eventHolder = $(".event-holder");
          eventHolder.addClass("scroll-box");
          eventHolder.addClass("scrolling-wrapper")
          eventHolder.scrollLeft(300);

      // CLEAR EVENT HOLDER BEFORE FOR-LOOP
      eventHolder.empty();

      // FOR LOOPS TO LIST EVENTS
      for (var i = 0; i < response.events.length; i++) {
        
        console.log(response.events[i]);

        // $("#event-holder").append(response.events[i].name + " " + response.events[i].link);

        // VARIABLES TO GRAB MEETUP JSON OBJECTS
        var eventName = response.events[i].name;
        var eventHost = response.events[i].group.name;
        var eventDate = response.events[i].local_date;
        var eventDateFormat = moment(eventDate).format("MMM Do YYYY");
        var eventTime = response.events[i].local_time;
        var eventTimeFormat = moment(eventTime, "hh:mm").format("LT");
        var eventCountdown = moment(eventDate).fromNow();
        // venue.name only works for some cities
        // var eventVenue = response.events[i].venue.name; 
        var eventDesc = response.events[i].descriptionW
        var eventLink = response.events[i].link

        var list = $("<ul>");

            list.append("<li><a href='" + eventLink + "' target='_blank'>" + eventName + "</a></li>");
            list.append("<li>Hosted by: <br>" + eventHost + "</li>" + "<br>");
            list.append("<li>Date: " + eventDateFormat + "</li>");
            list.append("<li>Local Time: " + eventTimeFormat + "</li>"  + "<br>");
            list.append("<li>Countdown: Event is " + eventCountdown + "!</li>" )

            // if (typeof eventVenue !== 'undefined') {
            // list.append("<li>Venue: " + eventVenue + "</li>");
            // } 

            // list.append("<li>Description: " + eventDesc + "</li>");

        //eventHolder.append(list);

        var newEvent = $("<div>");
            newEvent.addClass("event-style");

        newEvent.append(list);
        eventHolder.append(newEvent);

      }; // CLOSE FOR LOOP

    }); // CLOSE MEETUP-API AJAX CALL

  }); // CLOSE GOOGLE-MAPS-API AJAX CALL

}); // CLOSE EVENT LISTENER FOR ON-CLICK FOR CLICK-BUTTON