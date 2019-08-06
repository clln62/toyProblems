// Given an array of unique words, 
// find the word that contains the greatest number of other words. 
// A word must be at least two letters long.

function nestedWordCount(wordList) {
    // create an empty object
    let holder = {};
    // create a helper function that takes in a string word
    const helper = (string) => {
        // create a count set to 0
        let count = 0;
        // loop through wordList array
        for (let i = 0; i < wordList.length; i++) {
            // if string word includes word from array and is not the same word
            if (string.includes(wordList[i]) && wordList[i] !== string){
                // increment count
                count++;
            }
            // if i is equal to length of array
            if (i + 1 === wordList.length) {
                // set key, value pair in object with word and count
                holder[string] = count;
            }
        }
    }
    // loop through wordList
    for (let j = 0; j < wordList.length; j++) {
        // call helper function on each word
        helper(wordList[j]);
    }
    // create a result array with string and 0
    let result = ["", 0];
    // loop through object 
    for (let key in holder) {
        // if value to key is greater than value in result array
        if (holder[key] > result[1]) {
            // replace information
            result = [key, holder[key]];
        }
    }
    // return first index in result array
    return result[0];
};


console.log(nestedWordCount(["ant", "anti", "antiparticle", "antiparty", "apart", "art", "arty", "disparted", "impart", "imparted", "interparticle", "interparty", "part", "parted", "party", "tip"]))
console.log(nestedWordCount(["blue", "back", "up", "and", "going", "javascript", "much", "provides", "book", "series", "new", "many", "complete", "background", "years", "necessary", "those", "limited", "sufficiently", "easy", "toward", "mechanisms", "operators", "function", "types", "including", "first", "sufficiently", "easy", "books", "overview", "unicorn", "bear", "bee", "box", "cat", "gorilla", "giant", "gear", "goal", "home", "ache", "fantastic", "exuberant", "ice", "hollow", "happy", "healthy", "homily", "cold", "hot", "yellow", "orange", "green", "complacent", "super", "monster", "bull", "horse", "pig", "another", "one", "to", "test", "you", "guys", "out", "how", "like", "me", "now", "son"]))
console.log(nestedWordCount(["dis", "disintegrate", "disrated", "disrating", "rat", "rate", "rated", "rating"]))
console.log(nestedWordCount(["gray", "grays", "ray", "rays", "strays"]))


// sample inputs for writing tests!:

// ["ant", "anti", "antiparticle", "antiparty", "apart", "art", "arty", "disparted", "impart", "imparted", "interparticle", "interparty", "part", "parted", "party", "tip"]
// "antiparty"

// ["blue", "back", "up", "and", "going", "javascript", "much", "provides", "book", "series", "new", "many", "complete", "background", "years", "necessary", "those", "limited", "sufficiently", "easy", "toward", "mechanisms", "operators", "function", "types", "including", "first", "sufficiently", "easy", "books", "overview", "unicorn", "bear", "bee", "box", "cat", "gorilla", "giant", "gear", "goal", "home", "ache", "fantastic", "exuberant", "ice", "hollow", "happy", "healthy", "homily", "cold", "hot", "yellow", "orange", "green", "complacent", "super", "monster", "bull", "horse", "pig", "another", "one", "to", "test", "you", "guys", "out", "how", "like", "me", "now", "son"]
// "background"

// ["dis", "disintegrate", "disrated", "disrating", "rat", "rate", "rated", "rating"]
// "disrated"

// ["gray", "grays", "ray", "rays", "strays"]
// "grays"