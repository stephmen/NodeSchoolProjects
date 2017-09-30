
  
function add(arg1) {
  return function(arg2) {
    return function(arg3){
    return arg1+arg2+arg3 }  
  }
}

var add6 = add(6);
var add7 = add6(7)
add13=add6(7)

add(6)(7)
