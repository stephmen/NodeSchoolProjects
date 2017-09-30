var fs = require('fs')
buf = fs.readFileSync(process.argv[2])
var str = buf.toString()
lines = str.split(/\r\n|\r|\n/); 
console.log((lines.length)-1)
