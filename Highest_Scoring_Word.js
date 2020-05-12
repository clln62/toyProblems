/* 
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

*/


function high(x){
    x = x.concat(' ');
    const alphabet = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, 
        h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14,
        o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21,
        v: 22, w: 23, x: 24, y: 25, z: 26
    }
    
    let words = [];
    let count = 0;
    let singleWord = '';

    for (let i = 0; i < x.length; i++) {
        if (x[i] === ' ') {
            words.push([singleWord, count]);
            count = 0;
            singleWord = '';
        } else {
            count += alphabet[x[i]];
            singleWord = singleWord.concat(x[i]);
        }
    }

    let result = ['', 0];

    words.map(word => {
        if (word[1] > result[1]) {
            result = word;
        }
    })

    return result[0];
}
