// Given an array of unique words, 
// find the word that contains the greatest number of other words. 
// A word must be at least two letters long.

function nestedWordCount(wordList) {
    let holder = {};
    const helper = (string) => {
        let count = 0;
        for (let i = 0; i < wordList.length; i++) {
            if (string.includes(wordList[i]) && wordList[i] !== string){
                count++;
            }
            if (i + 1 === wordList.length) {
                holder[string] = count;
            }
        }
    }
    for (let j = 0; j < wordList.length; j++) {
        helper(wordList[j]);
    }
    let result = ["", 0];
    for (let key in holder) {
        if (holder[key] > result[1]) {
            result = [key, holder[key]];
        }
    }
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