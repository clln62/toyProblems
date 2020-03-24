/*

Split Strings

Complete the solution so that it splits the string into 
pairs of two characters. If the string contains an odd 
number of characters then it should replace the missing 
second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']


https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/javascript

*/



function solution(str){
  let result = [];
  for (let i = 0; i < str.length; i+=2) {
    if (str[i + 1] !== undefined) {
      result.push(str[i] + str[i + 1]);
    } else {
      result.push(str[i] + "_");
    }
  }
  return result;
}