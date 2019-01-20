
function initMap() 
{
  var options = 
  {
    zoom: 15,
    center: {lat: 29.6480, lng: -82.3440},
    mapTypeId: google.maps.MapTypeId.SATELLITE
  }

  // New Map
  var mainMap = new google.maps.Map(document.getElementById('map'), options);

  google.maps.event.addListener(mainMap, 'rightclick', function(event) {
    
    addMarker({coords:event.latLng});
  
  });

  // Add Marker Function
  function addMarker(property)
  {
    var marker = new google.maps.Marker({

      position: property.coords,
      map: mainMap
    
    });
    

    var printScreen = '<h4>What is the problem: </h4> <input id = "problem"></input>' + 
    '<br/>' + '<h4> What is the building: </h4> <input id = "problem"></input>' + '<br/>'
    + '<button id = "Submit" onclick="postData();">submit</button>';

    // Check content to see if already edited
    var infoWindow = new google.maps.InfoWindow({

      content: printScreen
    
    });

    marker.addListener('click', function(){

      infoWindow.open(mainMap, marker);
    
    });
    

  }
}



//AIzaSyBpkcR8rXn5QMzjSAZ5Nyyl733P1DWCr3g