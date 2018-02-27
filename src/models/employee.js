'use strict';

var mongoose = require('mongoose');

// Create the Schema
var employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String
});

// Build the Model
var model = mongoose.model('Employee', employeeSchema);

// Export the Model
module.exports = model;
