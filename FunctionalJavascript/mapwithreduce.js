module.exports = function arrayMap(arr, fn) {
    return finalvalue = arr.reduce(function (a,b) {
    a.push(fn(b))
    return a    
    },[])
  }


/*   OFFICIAL

  module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function(acc, item, index, arr) {
      acc.push(fn.call(thisArg, item, index, arr))
      return acc
    }, [])
  } */
