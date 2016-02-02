var express = require('express'),
  app = express(),
  path = require('path');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

//Create routes for the admin section

//Get an instance of the router
var adminRouter = express.Router();

//Route middleware that will happen on every request
adminRouter.use(function (req, res, next) {

  //Log each request to the console
  console.log(req.method, req.url);

  //Continue doing what we were doing and go to the route
  next();

});

//Admin main page. The Dashboard (localhost:1337/admin)
adminRouter.get('/', function (req, res) {
  res.send('I am the dashboard!');
});

//Route middleware to validate :name
adminRouter.param('name', function (req, res, next, name) {
  //Validation would go here
  console.log('doing name validation on ' + name);

  //Save name once it's been validated
  req.name = name;

  next();
});

//Route with paramters (localhost:1337/admin/hello/:name)
adminRouter.get('/hello/:name', function (req, res) {
  res.send('hello ' + req.name + '!');
});


//User page (localhost:1337/admin/users)
adminRouter.get('/users ', function (req, res) {
  res.send('I show all the users!');
});

//Route with parameters (localhost:1337/admin/users/:name)
adminRouter.get('/users/:name', function (req, res) {
  res.send('Hello ' + req.params.name + '!');
});

//Posts page (localhost:1337/admin/posts)
adminRouter.get('/posts', function (req, res) {
  res.send('I show all the posts!');
});

//Apply the routes to our application
app.use('/admin', adminRouter);


// tell ourselves what's happening
app.listen(1337);
console.log('Visit me at http://localhost:1337');
