'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LevelSchema = new Schema({
  id:{
    type: String,
    required: 'ID Usuario'
  },
  historia: {
    type: String,
    required: 'Historia relacionada al nivel'
  },
  descripcion: {
    type: String
  },
  elements: {
    type: String
  },
  progress:{
    type: String
  },
  fondo: {
    type: String
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Level', LevelSchema);