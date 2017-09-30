    var path = require('path')
    var express = require('express')
    var app = express()
    app.use(require('stylus').middleware(process.argv[3]||path.join(__dirname + 'public')));
    
    app.use(express.static(process.argv[3]||path.join(__dirname + 'public')));
      app.get('/forms',function(req,res){
      res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
})
    app.listen(process.argv[2])
      