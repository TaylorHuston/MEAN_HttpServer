//*****Pure Node*****

////Get the HTTP and FIlesysten modules
//var http = require('http'),
//    fs = require('fs');
//
////Create Server
//http.createServer(function (req, res) {
//  res.writeHead(200, {
//    'Content-Type': 'text/html',
//    'Access-Control-Allow-Origin': '*'
//  });
//
//  //Grab the index.html file
//  var readStream = fs.createReadStream(__dirname + '/index.html');
//
//  //Send index file to browser
//  readStream.pipe(res);
//
//
//}).listen(1337);
//
//console.log('Alive at localhost:1337');

//*****Using Express*****

//Load Express
var express = require('express');
var app = express();
var path = require('path');

//Send index.html to browser
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+ '/index.html'));
});

//Routes for Admin section
var adminRouter = express.Router();

//Admin main page. /admin
adminRouter.get('/', function(req, res) {
  res.send('Dashboard');
});

//Admin main page. /admin/users
adminRouter.get('/users', function(req, res) {
  res.send('Users');
});

//Admin main page. /admin/posts
adminRouter.get('/posts', function(req, res) {
  res.send('Posts');
});

app.use('/admin', adminRouter);

//Start server
app.listen(1337);
console.log('Alive at localhost:1337');