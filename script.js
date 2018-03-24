
$(document).ready(load);

function load() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(continueLoad);
    }
    else {
        $("h2").html("Location: GeoLocation is not supported by this browser");
    }
}

function continueLoad(position) {
    var longitude = position.coords.longitude;
    var latitude = position.coords.latitude;
    console.log("longitude: " + longitude);
    console.log("latitude: " + latitude);
    longitude = parseFloat(longitude);
    latitude = parseFloat(latitude);
    
      $.ajax({url: "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude,
          success: function(result) {
              console.log(result);
              var weather = result.weather
            
              $("h2").html("Location: " + result.name);
              $("icon").attr("src", weather.icon);
              $("h2.temp").html(result.main.temp);
          },
             }).done(function() {
              console.log("done");
      });   
  }