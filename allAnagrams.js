/*Given a single input string, write a function that produces 
all possible anagrams of a string and outputs them as an array. 
At first, don't worry about repeated strings. What time 
complexity is your solution?*/


function allAnagrams (string) {
    // create an empty, output array
    let output = [];
    // push string into array
    output.push(string);
    // split string
    let split = string.split("");
    // create a count
    let count = 1;
    // helper function that takes in array
    function helper (array) {
        // sort split string, join, and save
        let pushString = array.sort(function() {
          return .5 - Math.random();
          }).join("")

        // if output array does not include this version
        if (!output.includes(pushString)) {
            // push word to output array
            output.push(pushString);
            // increment count
            count++;
        }
    }
    // create an endpoint
    let stringLength = string.length;
    let endNum = stringLength * (stringLength - 1);
    // while count is less than endpoint
    while (count !== endNum) {
        // call helper function
        helper(split);
    }
    // return output array
    return output;
}

console.log(allAnagrams('abc'))
console.log(allAnagrams('map'))
console.log(allAnagrams('poor'))