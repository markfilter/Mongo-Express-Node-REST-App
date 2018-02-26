'use strict';

// Import Express
var express = require('express');

// Create a Router to prevent namespace collisions
var router = express.Router();

/*
  API ROUTES
*/
// TODO: GET Route - fetches ALL employees
router.get('/employees', function(request, response){
  
  response.send('Hello World');

});

// TODO: GET Route - fetches employee by ID


// TODO: POST Route - adds an employee to the database


// TODO: PUT Route - updates an existing employee in the database


// TODO: DELETE Route - removes an existing employee out of the database



// Export the router so it can be accessed in app.js
// Think of this like the Video Out cable on the back of your DVD player.
// When you require the Router in the app.js file, that would be you plugging
// in the cable into this socket.
module.exports = router;
