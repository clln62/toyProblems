// Write a function that takes as its input a string
// and returns an array of arrays as shown below
// sorted in descending order by frequency
// and then by ascending order by character.

// "aaabbc" => [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// "mississippi" => [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// "" => [ ]

function characterFrequency(str) {
    // create a storage obj
    let storage = {};
    // create a result array
    let result = [];
    // loop through string
    for (let i = 0; i < str.length; i++) {
        // if object does not have letter
        if (storage[str[i]]) {
            // add to pair value
            storage[str[i]]++
        } else {
            // else
                // store in object with a one
            storage[str[i]] = 1;
        }
    }
    // loop through object
    for (let key in storage) {
        // push key pair values as tuples into result
        result.push([key, storage[key]]);
    }
    // sort array by second index of tuple
    result.sort(function(a,b) {
        return b[1] - a[1];
    })
    // return result
    return result;
}


console.log(characterFrequency('aaabbc'));
console.log(characterFrequency('mississippi'));
console.log(characterFrequency(''));