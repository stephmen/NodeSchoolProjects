//Create a through stream with a `write` and `end` function:

    var through = require('through2');
    var stream = through(write, end);



//Inside the write function, call `this.push()` to produce output data and call
//`next()` when you're ready to receive the next chunk:

    function write (buffer, encoding, next) {
        this.push(buffer.toString().toUpperCase());
        next();
    }

//and call `done()` to finish the output:

    function end (done) {
        
        done();
    }


process.stdin.pipe(stream).pipe(process.stdout);


//Official MSVideoResolutionDistribution

/*
var through = require('through2');
  var tr = through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
  });
  process.stdin.pipe(tr).pipe(process.stdout);
  */