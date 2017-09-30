var express = require('express')
var app = express()
var pug = require('pug')
var path= require("path");



app.set('view engine', 'pug')
app.set('views/*  */', path.join(__dirname, 'templates'))
//app.use(express.static(process.argv[3]) || path.join(__dirname, 'public'))
app.listen(process.argv[2])


app.get('/home',function(req,res){
  res.render('index', {date: new Date().toDateString()})
  
});

/* var express = require('express')
    var app = express()
    app.set('view engine', 'pug')
    app.set('views', process.argv[3])
    app.get('/home', function(req, res) {
      res.render('index', {date: new Date().toDateString()})
    })
    app.listen(process.argv[2]) */

