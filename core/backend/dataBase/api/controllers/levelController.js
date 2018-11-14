'use strict';

var mongoose = require('mongoose'),
  Level = mongoose.model('Level');

exports.list_all_levels = function(req, res) {
  Level.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.listFromID = function(req, res){
  Level.find({id : req.query.id}, function(err, task){
    if (err)
        res.send(err);
    res.json(task);
  });
};

exports.createLevel= function(req, res) {
  var new_task = new Level(req.body);
  new_task.save(function(err, task) {
    if (err){
      res.send(err);
      console.log(err);
    }
    res.json(task);
  });
};

exports.updateLevel = function(req, res) {
  Level.findOneAndUpdate({id:req.query.id}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.deleteLevel = function(req, res) {
  Level.remove({
    id:req.query.id
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
