

function postData() {
    fetch('http://pingcare.biz/api/pings/', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify({
        latitude : "2353",
        longitude : "1345",
        ping_count : "1",
        issue : "elon musk"
    
  })
})
}
