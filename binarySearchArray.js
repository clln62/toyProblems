/*Given a sorted array of integers, find the index of a target value using a 
binary search algorithm.

A binary search finds an item in a sorted array by repeatedly choosing a middle 
value and dividing the search interval in half. The initial interval includes the 
whole array. If the value of the target value is less than the middle value of the 
interval, then the next interval will be the lower half of the current interval. If 
the value of the target value is greater than the middle value, then the next interval 
will be the upper half. The search process repeats until the middle value is equal to 
the target value, or the search interval is empty.


Note:
Your function should return -1 for target values not in the array. 

Do NOT use Array.prototype.indexOf in your solution. What would be the fun in that?*/


// create a function called binarySearch that takes an array and a target
function binarySearch (array, target) {
    // create empty object
    let object = {};
    // loop through array 
    for (let i = 0; i < array.length; i++) {
        // place element into object with index
        object[array[i]] = i;
    }
    // create helper func (possibly)
    function helper (newArray, target) {
        // create empty array
        let arr = [];
        // find middle of array
        let middle = newArray[Math.floor((newArray.length - 1) / 2)]
        // loop through new array
        for (let i = 0; i < newArray.length; i++) {
          // if target is greater than middle
          if (target > middle && newArray[i] > middle) {
              // push second half into empty array
              arr.push(newArray[i])
          // else
          } else if (target < middle && newArray[i] < middle) {
              console.log(newArray)
              // push first half into empty array
              arr.push(newArray[i])
          }

        }
        // if new array length > 1 
        if (arr.length > 1) {
            // call function with new array and target
            helper(arr, target)
        } else {
          array = arr;
        }
    }
    // call helper with array and target
    helper(array, target)
    // loop through object
    for (let key in object) {
        // if key is equal to element in array
        if (key === array[0]) {
            // return key value
            return object[key];
        } else {
            // else
                // return -1
            return -1;
        }
    }
}






console.log(`Test1: expected ${binarySearch([5], 4)} to be -1`);
console.log(`Test2: expected ${binarySearch([11, 12, 13, 14, 15], 11)} to be 0`);
console.log(`Test3: expected ${binarySearch([11, 12, 13, 14, 15], 12)} to be 1`);
console.log(`Test4: expected ${binarySearch([11, 12, 13, 14, 15], 13)} to be 2`);
console.log(`Test5: expected ${binarySearch([11, 12, 13, 14, 15], 14)} to be 3`);
console.log(`Test6: expected ${binarySearch([11, 12, 13, 14, 15], 15)} to be 4`);
console.log(`Test7: expected ${binarySearch([11, 12, 13, 14, 15], 16)} to be -1`);