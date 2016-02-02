var express = require('express'),
    app = express(),
    path = require('path');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// tell ourselves what's happening
app.listen(1337);
console.log('Visit me at http://localhost:1337');