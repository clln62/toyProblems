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
  // create an object holder
  let holder = {};
  // create a string result
  let result = "";
  // create a helper function that takes in a string
  const helper = function(str) {
    // loop through the string
    for (let i = 0; i < str.length; i++) {
      // if element is not in object
      if (!holder[str[i]] && str == string1) {
        // place in object with value of false
        holder[str[i]] = false;
      }
      // if element is in object and string is same as string2
      if (holder[str[i]] !== undefined && str === string2) {
        // change value to true to signify a double case
        holder[str[i]] = true;
      }

    }

  }
  // call helper function on both string1 and string2
  helper(string1);
  helper(string2);
  // loop through object
  for (let key in holder) {
    // if value is true
    if (holder[key] === true) {
      // place key into result
      result += key;
    }
  }
  // return result
  return result;
};

console.log(commonCharacters("mynameiscollin", "mississippi"));
console.log(commonCharacters('acexivou', 'aegihobu'));