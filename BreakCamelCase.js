/*

Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution('camelCasing') // => should return 'camel Casing'

https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

*/

function solution(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) {
            result = result.concat(string[i]);
        } else {
            result = result.concat(` ${string[i]}`)
        }
    }
    return result;
}


Test.assertEquals(solution('camelCasing'), 'camel Casing')