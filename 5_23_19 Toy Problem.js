// Create a function that....
// Finds sum of string
// String letters reflects alaphabet where a=1, b=2, c=3.... z=26

function solve(string) {
  let alpha = '0abcdefghijklmnopqrstuvwxyz'
  let count = 0;
  let result = 0;
  while (count !== string.length) {
    for (var i = 0; i < alpha.length; i++) {
      if (string[count] === alpha[i]) {
        result += alpha.indexOf(alpha[i]);
        count++;
      }
      if (count === string.length) {
        return result;
      }
    }
  }
}


console.log(solve('zodiac')); //=> 58
console.log(solve('strength'));//=> 111
console.log(solve('chruschtschov')); //=> 167
console.log(solve('abcde')); //=> 15