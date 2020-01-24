// Google Maps APIkey: AIzaSyA_nYBaMy24N19jV0MZ8vJRvNOlOGblbSc


// =========================================================================================
// S T A R T E R   C O D E 
// =========================================================================================

// Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     var uluru = {lat: -25.344, lng: 131.036};
//     // The map, centered at Uluru
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 4, center: uluru});
//     // The marker, positioned at Uluru
//     var marker = new google.maps.Marker({position: uluru, map: map});
//   };

// =========================================================================================
// EVENT LISTENER FOR ON-CLICK OF CITY-BUTTON
// =========================================================================================

$(document).on("click", ".city-button", function () {

    // console.log($(this).attr("city"));

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

        console.log("Google Maps", response);
        console.log("City: " + response.results[0].address_components[0].short_name);
        console.log("Lat: " + response.results[0].geometry.location.lat);
        console.log("Long: " + response.results[0].geometry.location.lng);

        var cityName = response.results[0].address_components[0].short_name;
        var cityLat = response.results[0].geometry.location.lat;
        var cityLong = response.results[0].geometry.location.lng;

        var mapText = $("#map-text");
        mapText.addClass("section-header");
        mapText.text("Explore " + cityName);

        // The location of city
        var city = { lat: cityLat, lng: cityLong };
        // The map, centered at city
        var map = new google.maps.Map(
            document.getElementById('map'), { zoom: 15, center: city });
        // var map;
        // function initMap() {
        //   map = new google.maps.Map(document.getElementById('map'), {
        //     center: {city},
        //     zoom: 8
        //   });
        // }
        // The marker, positioned at city
        var marker = new google.maps.Marker({ position: city, map: map });




    }); // CLOSE AJAX CALL

}); // CLOSE EVENT LISTENER FOR ON-CLICK