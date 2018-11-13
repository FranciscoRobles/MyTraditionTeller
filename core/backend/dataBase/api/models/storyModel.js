'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StorySchema = new Schema({
  id:{
    type: String,
    required: 'ID Historia'
  },
  string: {
    type: String,
    required: 'Nombre relacionada a la historia'
  },
  nivel: {
    type: String,
    required: 'Nivel relacionado a la historia'
  }
});

module.exports = mongoose.model('Story', StorySchema);