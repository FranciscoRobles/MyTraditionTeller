'use strict';

var mongoose = require('mongoose'),
  Elements = mongoose.model('Elements');

exports.list_all_elements = function(req, res) {
  Elements.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.listFromID = function(req, res){
  Elements.find({id : req.query.id}, function(err, task){
    if (err)
        res.send(err);
    res.json(task);
  });
};

exports.createElement = function(req, res) {
  var new_element = new Elements(req.body);
  new_element.save(function(err, task) {
    if (err){
      res.send(err);
      console.log(err);
    }
    res.json(task);
  });
};

exports.updateElement = function(req, res) {
  Elements.findOneAndUpdate({id:req.query.id}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.deleteElement = function(req, res) {
  Elements.remove({
    id:req.query.id
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};