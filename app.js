var express = require('express');
var bodyParser = require('body-parser');
var querystring = require('querystring');
var mongoose = require('mongoose');
var router = require("./routes");
var app = express()

const PORT = 3003;

connectCallback = function(error, db){
  put(db)
  put(error)
}
// connect to DB
//mongoose.connect('mongodb://information_db:3305/songs_information');
mongoose.connect('mongodb://192.168.99.101:3305/songs_information');
//mongoose.connect('mongodb://192.168.99.101:3305,192.168.99.102:3305', { mongos: true }, this.connectCallback);




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// API routes
app.use("/",router);

// Server Start at Port
app.listen(PORT);
