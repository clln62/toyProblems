/* 

Create a function that takes in an integer array
and returns the highest product of three numbers.

Example Inputs:
-1 0 2 5 3 -4
10 10 10 10
-5 9 6 0
2 -2 4 0 -1 3
4 -2 1 -4 6 0


Outputs:
30
1000
0
24
48

*/






const threeSum = (array) => {
    let sorted = array.sort();

    let length = sorted.length;

    let backPro = sorted[length-1] * sorted[length-2] * sorted[length-3];
    let frontPro = sorted[0] * sorted[1] * sorted[length-1];

    if  (backPro > frontPro) return backPro;
    else return frontPro;

}




  const threeSum = (arr) => {
    let maxProduct = 0;
    for (let i=0; i<arr.length - 2; i++) {
      for (let j=i+1; j<arr.length - 1; j++) {
        for (let k=j+1; k<arr.length; k++) {
          let product = arr[i] * arr[j] * arr[k];
          if (product > maxProduct) {
            maxProduct = product;
          }
        }
      }
    }
    return maxProduct;
  }