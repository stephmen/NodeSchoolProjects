var through = require('through2');
var http = require('http');
    

    function write (buf, _, next) {
    this.push(buf.toString().toUpperCase());;
      next();
    }
    
   
    var server = http.createServer(function (req, res) {
        if (req.method === 'POST') {
            req.pipe(through(write, end)).pipe(res);
        }
        
    });
    server.listen(process.argv[2]);

    /////////OFFICIAL SOLUTION////////////////////////////////////

 /*var http = require('http');
  var through = require('through2');
  
  var server = http.createServer(function (req, res) {
      if (req.method === 'POST') {
          req.pipe(through(function (buf, _, next) {
              this.push(buf.toString().toUpperCase());
              next();
          })).pipe(res);
      }
      else res.end('send me a POST\n');
  });
  server.listen(parseInt(process.argv[2]));
  */