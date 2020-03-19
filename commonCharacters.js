/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  let holder = {};
  let result = "";
  
  const helper = function(str) {
    for (let i = 0; i < str.length; i++) {
      if (!holder[str[i]] && str == string1) {
        holder[str[i]] = false;
      }
      if (holder[str[i]] !== undefined && str === string2) {
        holder[str[i]] = true;
      }
    }
  }
  
  helper(string1);
  helper(string2);
  
  for (let key in holder) {
    if (holder[key] === true) {
      result += key;
    }
  }

  return result;
};

console.log(commonCharacters("mynameiscollin", "mississippi"));
console.log(commonCharacters('acexivou', 'aegihobu'));