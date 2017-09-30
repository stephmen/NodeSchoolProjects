
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res) {
  var obj;
  fs.readFile(process.argv[3], function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    res.json(obj)
  });
});

app.listen(process.argv[2]);


/* Oficial Solution 

var express = require('express')
var app = express()
app.get('/search', function(req, res) {
  res.send(req.query)
})
app.listen(process.argv[2]) */