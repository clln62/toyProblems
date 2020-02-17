/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

https://www.codewars.com/kata/5839edaa6754d6fec10000a2
*/


function findMissingLetter(array) {
  let myStr = 'abcdefghijklmnopqrstuvwxyz';
  let str = '';
  let truth = false;
  if (array[0] === array[0].toUpperCase()) {
    myStr = myStr.toUpperCase();
  } 
  for (let i = 0; i < myStr.length; i++) {
    if (myStr[i] === array[0]) {
      truth = true;
    }
    if (truth) {
      str = str.concat(myStr[i])
    }
  }
  for (let j = 0; j < array.length; j++) {
      if (str[j]  !== array[j]) {
        return str[j];
      }
  }
  return str;
}



describe("KataTests", function(){
  it("exampleTests", function(){
    Test.assertEquals(findMissingLetter(['a','b','c','d','f']), 'e');
    Test.assertEquals(findMissingLetter(['O','Q','R','S']), 'P');
  });
});