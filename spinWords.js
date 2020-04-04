/*

Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). Strings 
passed in will consist of only letters and spaces. Spaces will be included only when more 
than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

*/

function spinWords(string){
    // split string into variable array
    const holder = string.split(' ');
    const result = [];
    // loop through array
    holder.forEach((element) => {
        // if word length is greater than 4
        if (element.length > 4) {
            // reverse the word
            result.push(element.split("").reverse().join(""));
        } else {
            result.push(element);
        }
    })
    // return the joined array as a string
    return result.join(" ");
}