 // Your reduce function should behave the same as a
    // regular Array#reduce, but it will take the array
    // to operate on as the first argument:
    
    reduce([1,2,3], function(prev, curr, index, arr) {
      return prev + curr
    }, 0)
    
    
    function reduce(items) {
       if (!items.length) return []             // end condition
       var head = items[0]                      // item to operate on
       if (head in items) {
           items[head]++;}
           else {
               items[head] =1;
           }
       }                              // perform action
       var tail = items.slice(1)                // next
       return [head].concat(reduce(tail)) // recursive step
    


(function (allNames, name) { 
        if (name in allNames) {
        allNames[name]++;
    }
        else {
        allNames[name] = 1;
    }
    return allNames;
    },);
    return conte
     }