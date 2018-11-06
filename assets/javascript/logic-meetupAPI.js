// Meetup API Key: 73526c5158647a3534730555e7b56b
// NEED THIS: https://cors-anywhere.herokuapp.com/

//google maps APIkey: AIzaSyD_Ko_8jQz0fztSy-EG6klDU0Rw8rr5AT0 


//Global variables
var city = "";
var APIkey = "73526c5158647a3534730555e7b56b";
var CORSlink = "https://cors-anywhere.herokuapp.com/";
var queryURL = CORSlink + "https://api.meetup.com/find/upcoming_events?key=" + APIkey + "&sign=true&photo-host=public&topic_category=hiking&page=20";

var meetUplink = "https://api.meetup.com/find/upcoming_events?key=73526c5158647a3534730555e7b56b&sign=true&photo-host=public&topic_category=hiking&page=20";
var eventHolder;

//meetup api key
$.ajax({
	url: queryURL,
  method: "GET"
  
}).then(function(response) {
  console.log(response);
  console.log(response.events);


  for (var i = 0; i < response.events.length; i++) {
    $("#event-holder").append(response.events[i].name + " " + response.events[i].link);

    //console.log(response.events[i].name + " " + response.events[i].link);
   
    // $("#event-holder").append(response.events[i].name + " " + response.events[i].link);
   
    var eventHolder = $("#event-holder");
    var list = $("<ul>").append("<li>" +response.events[i].name + " " + response.events[i].link + "</li>");

    eventHolder.append(list);
  }
  
  });

  //creating two new variables
  var lat; //adding the city.lat.lon from meetup link from this link https://api.meetup.com/find/upcoming_events?key=73526c5158647a3534730555e7b56b&sign=true&photo-host=public&topic_category=hiking&page=20
  var lng;

//google geocode api keys
  $.ajax({
    url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyD_Ko_8jQz0fztSy-EG6klDU0Rw8rr5AT0",
    method: "GET"
  }).then(function(response) {
    console.log(response);
    
    // <--- this is the object of data you get back from the api... including the lat/long
    // THEN use the lat/long to do your meetup api call in here!!!
  });



