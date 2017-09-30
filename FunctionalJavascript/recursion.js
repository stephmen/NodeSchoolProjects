/* function getDependencies(tree, result) {
    result = result || [];
    var dep;
    if (tree && tree.hasOwnProperty('dependencies')) {
      var dependencies = tree['dependencies'];
      for (var key in dependencies) {
        getDependencies(dependencies[key], result);
        dep = key + '@' + dependencies[key]['version'];
        if (result.indexOf(dep) === -1) {
          result.push(dep);
        }
      }
    }
    return result.sort();
  }
   */
  

  function getDependencies(mod, result) {
    result = result || []
    var dependencies = mod && mod.dependencies || []
    Object.keys(dependencies).forEach((dep) => {
      var key = dep + '@' + mod.dependencies[dep].version
      if (result.indexOf(key) === -1) result.push(key)
      getDependencies(mod.dependencies[dep], result)
    })
    return result.sort()
  }

  module.exports = getDependencies;
