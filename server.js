// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
//app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html

app.get("/:date", function (request, response) {
  response.set({
    'Content-Type': 'text/plain',
    'Status': 200
  })

  try {
    var d = new Date(request.params.date)
  } catch (e) {
    throw e
  }

  if (d == 'Invalid Date') {
    var d = new Date(+request.params.date * 1000)
  }

  if (d != 'Invalid Date') {
    response.end(JSON.stringify({
      natural: d.toDateString(),
      unix: d.getTime()
    }))
    
  }
  
  response.end(JSON.stringify({
    natural: null,
    unix: null
  }))


});

app.get("/", function (req, resp) {
  resp.end("give me unixtime or natural time");  
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
