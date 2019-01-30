
var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var str = "";

app.route('/getTeams').get(function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("testDB");

    dbo.collection("nba").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.team); // server side javascript, will log to terminal
      db.close();
    });

  });
});

var server = app.listen(8000, () => console.log(`Beginner ex app listening on port 8000`));