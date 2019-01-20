var arr = new Array();

function postData() {
  console.log(LAT);
  console.log(LNG);
  console.log(document.getElementById("place").value);
  console.log(document.getElementById("problem").value);
    fetch('http://pingcare.biz/api/pings/', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify({
        latitude : LAT,
        longitude : LNG,
        text_loc : document.getElementById("place").value,
        ping_count : 1,
        issue : document.getElementById("problem").value
    
  })
})
}

function getData()
{
  var request = new XMLHttpRequest();
  request.open('GET', 'http://pingcare.biz/api/pings',true);
  request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      data.forEach(function(element) {
        var tempMarker = new google.maps.Marker({
          position: {lat: parseFloat(element.latitude), lng: parseFloat(element.longitude)},
          map: mainMap
        });

        arr.push(tempMarker);
      });
    }
    else {
      console.log('error');
    }
  }

  request.send();
}

