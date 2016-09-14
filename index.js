
//Setting up a basic express server
var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var fs = require('fs'); //Include native fs module to dynamically read in our controllers
var methodOverride = require('method-override')

var app = express();

//To re-route and get API.

app.use(require('morgan')('dev'));
//Morgan to determine log line request.

app.get('/', function(req, res) {
  res.send('Hello Backend!');
});

// Environment variables
var server = app.listen(process.env.PORT || 3000);

module.exports = server;
