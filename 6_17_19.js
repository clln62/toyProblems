// create a function that inputs an array of primitives
// output first element that occurs an even # of times
// examples below

function evenOccurence (arr) {
  // create multiples object
  let multiples = {};
  // create a count
  let count = 1;
  // loop through given arr
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    // if element is in my object
    if (multiples[element] !== undefined) {
      // add to count
      multiples[element] += 1;
    } else {
      // set key with count
      multiples[element] = count;
    }
  }
  // loop through object
  for (let key in multiples) {
    // if key property is even
    if (multiples[key] % 2 === 0) {
      // return key
      return key;
    }
  }
  // return null
  return null;
};


console.log(evenOccurence([1,3,3,3,2,4,4,2,5])) // => 2
console.log(evenOccurence(['cat', 'dog', 'dig', 'cat'])) // => 'cat'
console.log(evenOccurence(['meow', 2, 1, 'meow'])) // => meow
console.log(evenOccurence(['red', 'orange', 'yellow', 'green'])) // => null