/*
Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]


https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
*/


function arrayDiff(a, b) {
    // create object holder
    const holder = {};
    // create results array
    const results = [];
    // create function to iterate over arrays
    const helper = (array) => {
        // iterate over array
        array.forEach((element) => {
            // if array is equal to b
            if (array === b) {
                // place element in object
                holder[element] = 'exist';
            }
            // if array is equal to a and element is not in object
            if (array === a && holder[element] !== "exist") {
                // push to results
                results.push(element);
            }
        })
    }
    // call helper function on both arrays
    helper(b);
    helper(a);
    // return results
    return results;
}