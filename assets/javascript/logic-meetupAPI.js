// Meetup API Key: 73526c5158647a3534730555e7b56b
// NEED THIS: https://cors-anywhere.herokuapp.com/

// =========================================================================================
// GLOBAL VARIABLES
// =========================================================================================

var city = "";
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