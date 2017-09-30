function repeat(operation, num, res) {
    // Modifiez ce code pour qu’il ne cause pas de débordement de pile !
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }
  
  function trampoline(fn) {
    return function(){
        var res = fn.apply(this, arguments);
        while(res instanceof Function){
            res = res();
        }
        return res;
    }
  }
  
  module.exports = function(operation, num) {
    // Et voilà où vous voudrez sans doute plutôt appeler votre trampoline !
    return trampoline(repeat)
    trampoline(function() {
        return repeat(operation, num)
  })
}
