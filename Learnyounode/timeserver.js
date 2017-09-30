var net = require('net');
var strftime = require('strftime') // not required in browsers
var port = process.argv[2]
var date = new Date();

var server = net.createServer(function(c) { //'connection' listener
  console.log('client connected');
  c.on('end', function() {
    console.log('client disconnected');
  });
  c.write(strftime('%F %H:%M\r\n'));
  //c.write(strftime('%B %d, %H:%M\r\n'));
  c.end();
  
});
function StartServer () {server.listen(port, function () { //'listening' listener
  console.log('server bound');
  


});}

StartServer();