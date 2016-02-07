//Load the espress package and create our app
var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');


//Connect to DB
mongoose.connect('mongodb://localhost/db_name');

//Send the index.html file to the user
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//Admin section using express.Router();
var adminRouter = express.Router();

//Middleware that runs before any of the follow adminRouter actions
adminRouter.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

//Admin main page
adminRouter.get('/', function (req, res) {
  res.send("Dashboard");
});

//Users
adminRouter.get('/users', function (req, res) {
  res.send("Users");
});

//Hello
adminRouter.param('name', function (req, res, next, name) {
  //Some validation
  console.log("Validating " + name);
  req.name = name;
  next();
});

adminRouter.get('/hello/:name', function (req, res) {
  res.send("Hello " + req.params.name + "!");
});

//Posts
adminRouter.get('/posts', function (req, res) {
  res.send("Posts")
});

app.use('/admin', adminRouter);


//Login using app.route()
app.route('/login')
  .get(function (req, res) {
    res.send("Login Form")
  })
  .post(function (req, res) {
    console.log("validating login");
    res.send("Processing");
  });



//Start server
app.listen(1337);
console.log('1337 is the magic port!');
