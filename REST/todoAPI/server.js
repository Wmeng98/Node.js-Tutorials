var express = require('express'),
app = express(),
port = 3000,
mongoose = require('mongoose');
task = require('./api/models/todoModel'),
bodyParser = require('body-parser');

// mongoose instance connectino url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true });

mongoose.connection.on("open", function(){
  console.log("mongodb is connected!!");

});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/todoRoutes'); //impporting route
routes(app); // register the route


app.listen(port);

// add middleware func below all other functions to handle 404 response
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});

console.log('todo RESTful API server started on: ' + port);
