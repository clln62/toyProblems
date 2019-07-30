
/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


const largestProductOfThree = (array) => {
  // if (array.length === 3) {
  //   return array.reduce((a, b) => a * b, 1);
  // }
  let newArray = [];
  // loop through array 
  for (let i = 0; i < array.length; i++) {
    newArray.push([array[i], i]);
  }
  // create a holder array
  let holder = [];
  let call = 0;
  // create helper function that takes in an array
  function helper (helperArray) {
    // loop through array
    for (let i = 0; i < helperArray.length; i++) {
      // create truthy check
      let truth = false;
      // if holder length is less than 3
      if (holder.length < 3) {
        // push element into array
        holder.push(helperArray[i]);
      } else if (call > 0) {
        // if element is greater than holder[0] and truth is false
        if (helperArray[i][0] > holder[0][0] && truth === false && !holder.includes(helperArray[i][1])) {
          // replace the new element
          holder[0] = helperArray[i];
          // set truth to true
          truth = true;
        }
        // if element is greater than holder[1] and truth is false
        if (helperArray[i] > holder[1][0] && truth === false && !holder.includes(helperArray[i][1])) {
          // replace the new element
          holder[1] = helperArray[i];
          // set truth to true
          truth = true;
        }
        // if element is greater than holder[2] and truth is false
        if (helperArray[i] > holder[2][0] && truth === false && !holder.includes(helperArray[i][1])) {
          // replace the new element
          holder[2] = helperArray[i];
          // set truth to true
          truth = true;
        }
      }
    }
  }
  // if holder length is 0
  if (holder.length < 1) {
    // call helper on input array
    helper(newArray);
  }
  call = 1;
  helper(newArray);
  console.log(holder);
  let result = [];
  for (let i = 0; i < holder.length; i++) {
    result.push(holder[i][0]);
  }
  
  return result.reduce((a, b) => a * b, 1);

};

// console.log(largestProductOfThree([0, 2, 3]))
// console.log(largestProductOfThree([2, 3, 5]))
// console.log(largestProductOfThree([7, 5, 3]))
// console.log(largestProductOfThree([7, 5, 7]))

module.exports = largestProductOfThree