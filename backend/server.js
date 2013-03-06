var http = require('http');
var MongoClient = require('mongodb').MongoClient;



MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World2\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');