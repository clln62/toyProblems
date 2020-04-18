/*

Simple Pig Latin

Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

*/

function pigIt(str){
    let result = "";
    let temp = "";
    let first = "";
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i - 1] === ' ') {
            first += str[i];
        } else if (str[i] !== ' ') {
            temp += str[i];
        } else if (str[i] === ' ' || str[i] === str.length-1) {
            result = result.concat(temp.concat(`${first}ay `));
            temp = '';
            first = '';
        }
    }
    return temp.length === 0 ? result.concat(first) : result.concat(`${temp}${first}ay`);
}