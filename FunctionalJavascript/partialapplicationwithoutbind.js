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
  return function() {
    
  	var args = slice.call(arguments);
  	console.log.bind(null, [namespace].concat(args));
  }
}

module.exports = logger