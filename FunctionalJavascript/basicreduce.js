function countWords(inputWords) {
    var conte  = inputWords.reduce(function (allNames, name) { 
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
    module.exports = countWords




