/*
Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.


https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

*/




function highAndLow(numbers){
    let highest = Number.NEGATIVE_INFINITY;
    let lowest = Infinity;
    let holder = numbers.split(' ');
    if (holder.length === 1) {
      return `${holder[0]} ${holder[0]}`;
    }
    for (let i = 0; i < holder.length; i++) {
        let num = parseInt(holder[i]);
        if (num > highest) {
            highest = num;
        } else if (num < lowest) {
            lowest = num;
        }
    }
    return `${highest} ${lowest}`;
}