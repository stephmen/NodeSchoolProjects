function checkUsersValid(goodUsers) {
  
    // allUsersValid is a function that compares lists of users against each other
    // if they do not match exactly return false if they do match return true 
  
    return function allUsersValid(submittedUsers) {
  
      // .every checks to see if every element in array passes a test
      // defined by the following function if every element passes
      // it will return true, and if not return false

       return submittedUsers.every(function(submittedUser) {
  
      // .some is a function that tests to see if any elements pass the
      // test defined by the function I.E. does this submitted user.id
      // match any of the goodUsers ids if so pass true else false
      // if all return true then .every returns true if any of them
      // return false then .every will return false
        return goodUsers.some(function(goodUser) {
          return goodUser.id === submittedUser.id;
        });
       });

       function every(fn) {
         for (var x of this) {
           if (!fn(x)) {
             return false;
           }
         }
         return true;
       }
       Array.prototype.every.call([0,1,2], function () {});

       function some(arr, fn) {
         for (var x of arr) {
           if (fn(x)) {
             return true;
           }
         }
         return false;
       }

       // -----------------

       for (var submittedUser of submittedUsers) {
         var isMatched = false;
         for (var goodUser of goodUsers) {
            if (goodUser.id === submittedUser.id) {
              isMatched = true;
            }
         }
         if (!isMatched) {
           return false;
         }
       }
       return true;
    };
  }
  
  module.exports = checkUsersValid;
  