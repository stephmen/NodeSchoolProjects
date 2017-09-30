var http = require('http');
var bl = require('bl');
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      //response.on('data', console.log)
      response.on('error', console.error)
      response.pipe(bl(function(err, data) { console.log(data.length) }))
      response.pipe(bl(function(err, data) { console.log(data.toString()) }))

      
      
    }).on('error', console.error)


/*Official

 var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })




/*
/*response.pipe(bl(function(err, data) { /* ... */  

/*
Remarquez que vous aurez probablement besoin de faire un data.toString()  
  pour convertir le Buffer reçu. 

  Écrivez un programme qui fait une requête HTTP GET sur une URL fournie en  
  premier argument de la ligne de commande.  Récupérez toutes les données du  
  serveur (et pas simplement le premier événement 'data'), puis écrivez deux  
  lignes sur la console (stdout).  



  La première ligne devrait être un nombre entier représentant le nombre de  
  caractères reçus du serveur.  La seconde ligne devrait être la String  
  complète reçue du serveur.
  */