/* Given a number, return a string with dash'-'marks before and after each 
odd integer, but do not begin or end the string with a dash mark. 

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'

*/


function dashatize(num) { 
  if (isNaN(num)) {
    return 'NaN';
  }
  num = Math.abs(num);
  const numString = num.toString();
  let output = '';
  for (let i = 0; i < numString.length; i++) {
    let number = Number(numString[i]);
    let oldNumber = Number(numString[i-1]);
    if (oldNumber % 2 == 0 && number % 2 !== 0 && i !== numString.length) {
      output = output.concat(`-`);
    }
    if (number % 2 !== 0 && i+1 !== numString.length) {
      output = output.concat(`${numString[i]}-`);
    } else {
      output = output.concat(numString[i]);
    }
  }
  return output;
};



Test.describe("Basic", function(){
    Test.assertEquals(dashatize(274), "2-7-4", "Should return 2-7-4");
    Test.assertEquals(dashatize(5311), "5-3-1-1", "Should return 5-3-1-1");
    Test.assertEquals(dashatize(86320), "86-3-20", "Should return 86-3-20");
    Test.assertEquals(dashatize(974302), "9-7-4-3-02", "Should return 9-7-4-3-02");
  });
  Test.describe("Weird", function(){
    Test.assertEquals(dashatize(NaN), "NaN", "Should return NaN");
    Test.assertEquals(dashatize(0), "0", "Should return 0");
    Test.assertEquals(dashatize(-1), "1", "Should return 1");
    Test.assertEquals(dashatize(-28369), "28-3-6-9", "Should return 28-3-6-9");
  });