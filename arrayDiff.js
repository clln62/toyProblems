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
    const holder = {};
    const results = [];
    const helper = (array) => {
        array.forEach((element) => {
            if (array === b) {
                holder[element] = 'exist';
            }
            if (array === a && holder[element] !== "exist") {
                results.push(element);
            }
        })
    }
    helper(b);
    helper(a);

    return results;
}