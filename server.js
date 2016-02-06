//Load the espress package and create our app
var express = require('express');
var app = express();
var path = require('path');

//Send the index.html file to the user
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//Admin section
var adminRouter = express.Router();

//Admin main page
adminRouter.get('/', function(req, res) {
  res.send("Dashboard");
});

//Users
adminRouter.get('/users', function(req, res) {
  res.send("Users");
});

//Posts
adminRouter.get('/posts',function(req, res) {
  res.send("Posts")
});

app.use('/admin', adminRouter);

//Start server
app.listen(1337);
console.log('1337 is the magic port!');

