var express = require('express'),
  cors = require('cors'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Level = require('./api/models/levelModel')
  Elements = require('./api/models/elementModel')
  Story = require('./api/models/storyModel')
  bodyParser = require('body-parser');

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
})

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dataBase');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/levelRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Server API started on: ' + port);
