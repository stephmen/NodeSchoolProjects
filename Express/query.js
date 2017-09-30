var express = require('express');
var app = express();
var url = require('url');


app.get('/search', function(req, res) {
  var parsedURL = url.parse(req.url, true);
  res.send(JSON.stringify(parsedURL.query));
});

app.listen(process.argv[2]);


/* Oficial Solution 

var express = require('express')
var app = express()
app.get('/search', function(req, res) {
  res.send(req.query)
})
app.listen(process.argv[2]) */