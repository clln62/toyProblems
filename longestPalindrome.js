/* Find the first case of the longest substring palindrome.
Spaces and letters from other words count as long as the rules
of a palindrome are still true.*/



/* Currently works for finding the longest word that is a palindrome 
in the string. My have start from scratch to work through the problem
in a completely different way.*/


function longestPalindrome (string) {
    // split string on space
    let array = string.split(' ');
    // set variable for longest word index and length
    let longest = [0,0];
    // loop through array
    for (let i = 0; i < array.length; i++) {
      // if element is same in reverse
      if (array[i] === array[i].split('').reverse().join('')) {
        // if length is greater than length in longest
        if (array[i].length > longest[1]) {
          // save index and length of word
          longest[0] = i;
          longest[1] = array[i].length;
        }
      }
    }
      // return element
    return array[longest[0]];
  };
 
  console.log(`Test1: expected "aibohphobia" and got "${longestPalindrome('aibohphobia')}"`);
  console.log(`Test2: expected " redivider " and got "${longestPalindrome('aaaa level eye redivider hannah')}"`);
  console.log(`Test3: expected "racecar" and got "${longestPalindrome('This palindrome occurs in the last half of the string racecar')}"`);
  console.log(`Test4: expected " tattarrattat " and got "${longestPalindrome('There was a tattarrattat on the racecar. It made a funny noise, gfedcbabcdefg')}"`);
  console.log(`Test5: expected "a racecar a" and got "${longestPalindrome('My dad is a racecar athlete')}"`);