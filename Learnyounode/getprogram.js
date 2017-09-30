/*var http = require('http')
var url = process.argv[2]
//console.log(url);
http.get(url, function callback (res) {
    res.setEncoding('utf8');
    res.on("data", function (data) { console.log(data) }); 
    //console.log("Got response: " + res.statusCode);
    
}).on('error', function(e) {
  console.log("Got error : " + e.message);
});
*/
 
 //Official Solution 
 
 
 var http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
      response.on('end', function(){
        console.log("End received!");
    });
      
    }).on('error', console.error)
