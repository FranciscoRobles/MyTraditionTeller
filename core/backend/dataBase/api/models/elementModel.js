'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ElementSchema = new Schema({
  id:{
    type: String,
    required: 'ID Usuario'
  },
  nombre: {
    type: String,
    required: 'Nombre relacionada al elemento'
  },
  imagen: {
    type: String
  },
  coordenadaX:{
    type: String
  },
  coordenadaY:{
    type: String
  }
});

module.exports = mongoose.model('Elements', ElementSchema);