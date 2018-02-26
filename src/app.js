'use strict';

// Import Statements
var express = require('express');

// Configure Express
var app = express();

// Configure Server to Listen on Port 3000
app.listen(3000, function(){
  console.log("The server is running on port 3000");
});
