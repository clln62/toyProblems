/* 
Highest Scoring Word

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. 

https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
*/




function high(x){
    // const alphabet = '0abcdefghijklmnopqrstuvwxyz';
    const alphabet = {  a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j: 10, k: 11, l: 12, 
                        m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, 
                        v: 22, w: 23, x: 24, y: 25, z: 26}
    // create object with each word and point value
    let holder = {};
    // create holder for individual words
    let wordHolder = '';
    // create helper function that takes in a string
    const helper = (word) => {
        // create a number variable set to zero
        let count = 0;
        // loop through string
        for (let j = 0; j < word.length; j++) {
            // add point value from alphabet object to count
            count += alphabet[word[j]];
        }
        // save word with point value in object
        holder[word] = count;
    }
    // loop through input string
    for (let i = 0; i < x.length; i++) {
        // place each letter in holder until you reach a space
        if (x[i] !== ' ') {
            wordHolder = wordHolder.concat(x[i]);
        }
        // if it is a space
        if (x[i] === ' ' || i + 1 === x.length) {
            // call helper function to get point value on word
            helper(wordHolder);
            // set holder to empty string
            wordHolder = '';
        }
    }
    // create output array with string and count
    let output = ['', 0];
    // loop through object
    for (let key in holder) {
        // if value is greater one in output
        if (holder[key] > output[1]) {
            // replace
            output = [key, holder[key]];
        }
    }
    // return string from output array
    return output[0];
}






Test.describe("Example tests",_=>{
Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
Test.assertEquals(high('take me to semynak'), 'semynak');  
});