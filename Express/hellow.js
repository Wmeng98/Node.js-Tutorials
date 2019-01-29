var express = require('express'); // use express module

// create object of the express module
var app = express(); 

// use create callback func
app.get('/', function(req, res) {
  res.send('Hello World');
});
// The 'res' parameter is used to send
// content back to the webpage. This 'res'
// Parameter provided by 'request' module to enable
// one to send content back to the web page


// make the server listen on port 3000
var server = app.listen(3000, functino() {
  
});