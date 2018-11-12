'use strict';
module.exports = function(app) {
  var level = require('../controllers/levelController');
  var element = require('../controllers/elementController');
  var story = require('../controllers/storyController');

  // Levels
  app.route('/levels')
    .get(level.list_all_levels);

  app.route('/createLevel')
    .post(level.createLevel);

  app.route('/findLevel')
    .get(level.listFromID);

  app.route('/updateLevel')
    .put(level.updateLevel);

  app.route('/deleteLevel')
    .delete(level.deleteLevel);

  // Elements
  app.route('/elements')
    .get(element.list_all_elements);
  
  app.route('/createElement')
    .post(element.createElement);
    
  app.route('/findElement')
    .get(element.listFromID);

  app.route('/updateElement')
    .put(element.updateElement);
    
  app.route('/deleteElement')
    .delete(element.deleteElement);

  //Stories
  app.route('/stories')
    .get(story.list_all_stories);

  app.route('/createStory')
    .post(story.createStory);

  app.route('/findStory')
    .get(story.listFromID);

  app.route('/updateStory')
    .put(story.updateStory);

  app.route('/deleteStory')
    .delete(story.deleteStory);
};