//*****Pure Node*****

//Get the HTTP and FIlesysten modules
var http = require('http'),
    fs = require('fs');

//Create Server
http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin': '*'
  });

  //Grab the index.html file
  var readStream = fs.createReadStream(__dirname + '/index.html');

  //Send index file to browser
  readStream.pipe(res);


}).listen(1337);

console.log('Alive at localhost:1337');