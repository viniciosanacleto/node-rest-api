'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExampleSchema = new Schema({
  name:                     { type: String},
  age:                      { type: Number},
  city:                     { type: String},

  created_at:               { type: Date, default: Date.now },
  updated_at:               { type: Date, default: Date.now }
});

module.exports = mongoose.model('Example', ExampleSchema);
