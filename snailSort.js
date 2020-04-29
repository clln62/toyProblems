/*

Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

*/

snail = function(array) {
    var result = [];
    var n=array.length;
    var x=n;
    var y=n;
    if(n==1){
        return array[0];
    }
    while(y>1){
        for(j=0;j<y;j++){
            result.push(array[0][j]);
        }
        array.splice(0,1);
        y--;
        for(j=0;j<y;j++){
            result.push(array[j][y]);
            array[j].splice(y);
        }
        x--;
        for(j=x-1;j>=0;j--){
            result.push(array[y-1][j]);
        }
        array.splice(y-1);
        x--;
        for(j=y-1;j>0;j--){
            result.push(array[j-1][0]);
            array[j-1].splice(0,1);
        }
        y--;
        if(y==1&&x==1){
            result.push(array[0][0]);
        }
    }
    return result;
  }