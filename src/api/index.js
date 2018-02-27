'use strict';

// Import Express
var express = require('express');
var Employee = require('../models/employee');

// Create a Router to prevent namespace collisions
var router = express.Router();

/*
  API ROUTES
*/
// NOTE: GET Route - fetches ALL employees
router.get('/employees', function(request, response){

  // query directly from the model Todo object.
  Employee.find({}, function(err, employees){

    if(err) {
      return response.status(500).json({message: err.message});
    }
    response.json({employees: employees});
  });

});

// TODO: GET Route - fetches employee by ID


// NOTE: POST Route - adds an employee to the database
router.post('/employees', function(request, response){
  var employee = request.body;

  Employee.create(employee, function(err, employee){
    if(err) {
      return response.status(500).json({err: err.message});
    }

    response.json({'employee': employee, message: 'Employee Created'});
  })
});


// NOTE: PUT Route - updates an existing employee in the database
router.put('/employees/:id', function(request, response){
  // Get the ID of the Todo to update
  var id = request.params.id;
  var employee = request.body;

  if(employee && employee._id != id) {
    return response.status(500).json({err: "Did not find a match to the ID provided."});
  }

  Employee.findByIdAndUpdate(id, employee, {new: true}, function(err, employee){
    // the {new: true} is an option. With this set to true, the data
    // returned in the response body contains the updated data, rather
    // than the old data.
    if(err) {
      return response.status(500).json({err: err.message});
    }

    response.json({'employee': employee, message: 'Employee Updated'});
  });
});



// NOTE: DELETE Route - removes an existing employee out of the database
router.delete('/employees/:id', function(request, response){
  // Get the ID of the Todo to update
  var id = request.params.id;
  var employee = request.body;

  if(employee && employee._id != id) {
    return response.status(500).json({err: "Did not find a match to the ID provided."});
  }

  Employee.findByIdAndRemove(id, function(err, employee){

    if(err) {
      return response.status(500).json({err: err.message});
    }

    response.json({'employee': employee, message: 'Employee Deleted'});
  });
});


// Export the router so it can be accessed in app.js
// Think of this like the Video Out cable on the back of your DVD player.
// When you require the Router in the app.js file, that would be you plugging
// in the cable into this socket.
module.exports = router;
