function sortedSquares (array) {
  //create new array
  let arr = [];
  //loop through array 
  for (let i = 0; i < array.length; i++) {
    //square each element
    //push to new array
    arr.push(Math.pow(array[i], 2))
  }
  //sort the array
  //return array  
  return arr.sort(function (a,b) {
    return a-b;
  });
}


console.log(sortedSquares([-4, -1, 0, 3, 10])) //=> [0, 1, 9, 16, 100]
console.log(sortedSquares([-7, -3, 2, 3, 11])) //=> [4, 9, 9, 49, 121]