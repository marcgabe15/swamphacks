
var LAT = 0;
var LNG = 0;
var mainMap;
function initMap() 
{
  var options = 
  {
    zoom: 15,
    center: {lat: 29.6480, lng: -82.3440},
    mapTypeId: google.maps.MapTypeId.SATELLITE
  }
  mainMap = new google.maps.Map(document.getElementById('map'), options);


  google.maps.event.addListener(mainMap, 'click', function(event) {
    document.getElementById
    addMarker({coords:event.latLng});
  });
  
  // Add Marker Function
  function addMarker(property)
  {
    var marker = new google.maps.Marker({

      position: property.coords,
      map: mainMap
    
    });
    LAT = property.coords.lat();
    LNG = property.coords.lng();
    
    
    var printScreen = '<h4>What is the problem: </h4> <input id = "problem"></input>' + 
    '<br/>' + '<h4> Where: </h4> <input id = "place"></input>' + '<br/>'
    + '<button id = "Submit" onclick="{postData();}">submit</button>';


    // Check content to see if already edited
    var infoWindow = new google.maps.InfoWindow({

      content: printScreen
    
    });


    infoWindow.open(mainMap, marker);

    marker.addListener('click', function(){

      infoWindow.open(mainMap, marker);
    
    });
    

  }

}






//AIzaSyBpkcR8rXn5QMzjSAZ5Nyyl733P1DWCr3g
