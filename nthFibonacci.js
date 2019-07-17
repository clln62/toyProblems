/*Suppose a newly-born pair of iguanas, one male, one female, are put in a large aquarium.
Iguanas are able to mate at the age of one month so that at the end of its second month a female can produce another pair of iguanas.
Suppose that our iguanas never die and that the female always produces one new pair (one male, one female) every month from the second month on.
How many pairs of iguanas will there be after `n` months?

For example, the iguana pair size for months zero through five are:
`0 1 1 2 3 5`
If `n` were 4, your function should return 3; for 5, it should return 5.

HINT: This iguana pattern is described exactly by the fibonacci sequence:

[https://en.wikipedia.org/wiki/Fibonacci_number]

Write a function that accepts a number `n` and returns the number of iguana pairs after `n` months.

DO NOT use a recursive solution to this problem. Your solution must run in linear time.

Write tests to make sure your code is working as expected.*/

function fibonacci (n) {
    // create an empty array 
    let array = [];

    // loop through array to length of n 
    for (let i = 0; i <= n; i++) {
        // if array length is equal or greater than 2
        if (array.length >= 2) {
            // add current to last
            // push to array
            array.push(array[i-1] + array[i-2]);
        } else {
            // else
            // push i to array
            array.push(i);
        }
    }
    // return last number in array
    return array.pop();
}


console.log(fibonacci(2)) //=> 1
console.log(fibonacci(4)) //=> 3
console.log(fibonacci(5)) //=>5
console.log(fibonacci(12)) //=>144
console.log(fibonacci(14)) //=>377

