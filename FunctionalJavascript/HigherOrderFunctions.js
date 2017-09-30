function repeat(operation, num) {
    var i = 1
      do {
          operation();
          i++;  
      } while (i <= num);
    }
    
    // Do not remove the line below
    module.exports = repeat