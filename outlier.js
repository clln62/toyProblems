/*
Find The Parity Outlier

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)


https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

*/


function findOutlier(integers){
    let evens = [], 
        odds = [];
    integers.forEach( element => {
        if (element % 2 === 0) evens.push(element);
        if (element % 2 !== 0) odds.push(element);
    })
    if (evens.length === 1) {
        return evens[0];
    } else {
        return odds[0];
    }
}


function findOutlier(integers){
    let oddCount, evenCount = 0;
    let even, odd;
    integers.forEach( element => {
      if (element % 2 === 0) {
        evenCount++;
        even = element;
      } else {
        oddCount++;
        odd = element;
      }
    })
    
    if (evenCount === 1) {
      return even;
    } else {
      return odd;
    }
  }