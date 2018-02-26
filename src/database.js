'use strict';

var mongoose = require('mongoose');

const host = 'localhost';
const projectName = 'men-server-app';

mongoose.connect('mongodb://' + host + '/' + projectName, function(err) {
  if(err) {
    console.log('Failed connecting to MongoDB.');
  }
  else {
    console.log('Successfully connected to MongoDB!');
  }
});
