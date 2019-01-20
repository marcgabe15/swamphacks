var arr;
let arr = new Array();

function postData() {
  console.log(LAT);
  console.log(LNG);
    fetch('http://pingcare.biz/api/pings/', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify({
        latitude : LAT,
        longitude : LNG,
        text_loc : "jeeff beezbos",
        ping_count : "1",
        issue : "elon musk"
    
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
          position: {lat: element.latitude, lng: element.longitude},
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

function update()
{
  for (var i = 0; i < arr.length; i++)
  {
    arr.pop();
  }

  getData();
}
