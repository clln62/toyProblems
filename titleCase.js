/* 

Title Case

https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

###Arguments (Haskell)

First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

*/


function titleCase(title, minorWords) {

    let result = '';
    
    if (title.length === 0) {
        return result;
    } else if (title.split(' ').length === 1) {
      return title.charAt(0).toUpperCase() + title.slice(1);
    }

    title = title.toLowerCase();
    
    if (minorWords !== undefined) {
      minorWords = minorWords.toLowerCase();
    } else {
      minorWords = '';
    }
    let lowerCaseArray = minorWords.split(' ');
    let titleArray = title.split(' ');

    let minorWordsObject = {};

    function breakup (array) {
        for (let i = 0; i < array.length; i++) {
            if (array === lowerCaseArray) {
                minorWordsObject[array[i]] = array[i];
            }
            if (array === titleArray) {
                let word = array[i];
                if (i === 0 || !minorWordsObject[word] && i !== array.length-1) {
                    result = result.concat(word.charAt(0).toUpperCase() + word.slice(1) + ' ');
                } else if (i === array.length-1 && !minorWordsObject[word]) {
                    result = result.concat(word.charAt(0).toUpperCase() + word.slice(1));
                } else if (i === array.length-1 && minorWordsObject[word]) {
                    result = result.concat(word);
                } else {
                    result = result.concat(word + ' ');
                }
            }
        }
    }

    breakup(lowerCaseArray);
    breakup(titleArray);

    return result;
  
}