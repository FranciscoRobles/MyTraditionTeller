'use strict';

var mongoose = require('mongoose'),
  Story = mongoose.model('Story');

exports.list_all_stories = function(req, res) {
  Story.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.listFromID = function(req, res){
  Story.find({id : req.query.id}, function(err, task){
    if (err)
        res.send(err);
    res.json(task);
  });
};

exports.createStory = function(req, res) {
  var new_story = new Story(req.body);
  new_story.save(function(err, task) {
    if (err){
      res.send(err);
      console.log(err);
    }
    res.json(task);
  });
};


exports.updateStory = function(req, res) {
  Story.findOneAndUpdate({id:req.query.id}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.deleteStory = function(req, res) {
  Story.remove({
    id:req.query.id
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};