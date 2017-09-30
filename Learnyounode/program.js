

var filterFn = require('./moduleFilter.js')
    var dir2 = process.argv[2]
    var filterStr2 = process.argv[3]
    
    filterFn(dir2, filterStr2, function (err, list2) {
      if (err) {
        return console.error('There was an error:', err)
      }
    
      list2.forEach(function (file4) {
        console.log(file4)
      })
    })
