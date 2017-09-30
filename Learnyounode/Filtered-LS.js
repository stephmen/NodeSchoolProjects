
/*var fs = require('fs')
var FinalContent = undefined;
fs.readFile(process.argv[2], finishedReading)

function finishedReading(error, FileData) {
  if (error) return console.error(error);
  var FinalContent = FileData.toString().split('\n').length -1;
  console.log(FinalContent);
} */

var fs = require('fs');
var path = require('path');

function parameter() {
    return [process.argv[2],process.argv[3]];
}

fs.readdir(parameter()[0], finishedReading);
function finishedReading (error, FileData) {
    if (error) return console.error(error);
    var len = Object.keys(FileData).length;
    var par = "."+parameter()[1].toString();
    
    for (i=0 ; i < len; i++) {
        var a = path.extname(FileData[i]).toString();
        if (par == a) {console.log(FileData[i])}
        else {""}

        
    }     
    

    /*console.log('#################VARIABLE TEST##############################')
    console.log(len);
    console.log(FileData[2]);
    console.log(FileData.toString());
    console.log(FileData);
    console.log(parameter()[0]);
    console.log('.'+parameter()[1]);
    */
    
}