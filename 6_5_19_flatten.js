// Using recursion, create a function that takes in an array of arrays
// Return a new array with no nested arrays


function flatten (arrays) {
    let result = [];
    let help = (array) => {
      array.forEach((element) => {
        if (!Array.isArray(element)) {
          result.push(element);
        } else {
          help(element);
        }
      });
    };
    
    help(arrays);
    
    return result;
  };



console.log(flatten([[10], [20,30], [40]])) //=> [10,20,30,40]
console.log(flatten([1, 2, [3], 4, [5, [6], 7]])) //=> [1, 2, 3, 4, 5, 6, 7]