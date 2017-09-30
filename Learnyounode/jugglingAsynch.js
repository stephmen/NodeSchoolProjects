/*var http = require('http')
var bl = require('bl')
var urls = process.argv
 
  
function buffer() { for (i=2;i < urls.length; i++) {
        
            var url = process.argv[i];
            //return url
            //var buf = url.toString()
            //console.log(url.toString());
            httpget(url.toString())
        
}
 }
  
buffer();

  
  function httpget (url) { http.get(url, function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
       data = data.toString()
        console.log(data)
         }))
        })
  }
*/


//Official ########################################################################################################


var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }



       