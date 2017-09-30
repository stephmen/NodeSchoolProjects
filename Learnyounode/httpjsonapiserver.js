


var http = require('http')
var url = require('url')
var server = http.createServer(function (req, res) { 
    
    
//if (req.method !== 'get') {
     // return res.end('send me a get\n')
//}
var q = url.parse(req.url, true);
var isodate = q.search.toString().slice(5);
var date = new Date(isodate);
var jsondate = (new Date(date)).toJSON();

if  (q.pathname === '\/api\/parsetime'){
res.writeHead(200, { 'Content-Type': 'application/json' })
    //res.write(q.pathname+ '\r\n');
    res.write('{\"hour\":' +  date.getHours() + ',\"minute\":' + date.getMinutes() + ',\"second\":' + date.getSeconds() +'}' );
    return res.end();
}

else if (q.pathname === '\/api\/unixtime'){

res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write('{\"unixtime\":'+(date.getTime()).toString()+'}')
    return res.end();

}
   else 
{
    
    return res.end();

}

    
  
  });

server.listen(process.argv[2]);


  /*res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(q.pathname+ '\r\n');
    res.write(date + ' var = date\r\n');
    res.write(jsondate +  ' var = json date \r\n')
    return res.end();*/
