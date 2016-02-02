var express = require('express'),
  app = express(),
  path = require('path');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

//Create routes for the admin section

//Get an instance of the router
var adminRouter = express.Router();

//Admin main page. The Dashboard (localhost:1337/admin)
var admingRouter.get('/', function (req, res) {
  res.send('I am the dashboard!');
});

//User page (localhost:1337/admin/users)
adminRouter.get('/users ', function (req, res) {
  res.send('I show all the users!');
});

//Posts page (localhost:1337/admin/posts)
adminRouter.get('/posts', function (req, res) {
  res.send('I show all the posts!';)
});

//Apply the routes to our application
app.use('/admin', adminRouter);


// tell ourselves what's happening
app.listen(1337);
console.log('Visit me at http://localhost:1337');
