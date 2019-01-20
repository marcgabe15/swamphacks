

function postData(decimal1, decimal2) {
    fetch('http://pingcare.biz/api/pings/', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify({
        latitude : decimal1,
        longitude : decimal2,
        ping_count : "1",
        issue : "elon musk"
    
  })
})
}
