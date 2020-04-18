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
    // create a result string
    let result = "";
    // create a temp word string
    let temp = "";
    // create a holder for the first letter
    let first = "";
    // loop through string
    for (let i = 0; i < str.length; i++) {
        // if character is first letter or first character after a space
        if (i === 0 || str[i - 1] === ' ') {
            // save in first letter holder
            first += str[i];
        } else if (str[i] !== ' ') {
            // else if character is not a space
            // place character into temp word string
            temp += str[i];
        } else if (str[i] === ' ' || str[i] === str.length-1) {
            // else if character is a space or end of input
            // add first letter with "ay" and a space to result
            result = result.concat(temp.concat(`${first}ay `));
            // reset temp and first
            temp = '';
            first = '';
        }
    }
    // return result without last space
    return temp.length === 0 ? result.concat(first) : result.concat(`${temp}${first}ay`);
}