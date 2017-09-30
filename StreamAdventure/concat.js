concat = require('concat-stream')

process.stdin
    .pipe(concat(function(buff) {
       var buff = reverse(buff.toString())
       process.stdout.write(buff)
      
    }))

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

/* Here's the reference solution:

  var concat = require('concat-stream');
  
  process.stdin.pipe(concat(function (src) {
      var s = src.toString().split('').reverse().join('');
      console.log(s);
  }));

  */