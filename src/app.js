'use strict';

// Import Statements
var express = require('express');
var router = require('./api');
var parser = require('body-parser');

// Configure Express
var app = express();
app.use(parser.json());
app.use('/api', router);

// Configure Server to Listen on Port 3000
app.listen(3000, function(){
  console.log("The server is running on port 3000");
});
