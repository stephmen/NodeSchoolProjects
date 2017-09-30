/* var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
    //console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}

module.exports = logger */


var slice = Array.prototype.slice

function logger(namespace) {
  
    
    var args = slice.call(arguments);
    var Enfin = console.log.bind(null, [namespace].concat(args));


  }


module.exports = logger