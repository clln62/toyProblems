/* Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0. */



function expandedForm(num) {
  let numberString = num.toString();
  let output = '';
  for (let i = 0; i < numberString.length; i++) {
    let realNumber = Number(numberString[i]);
    let zeros = numberString.length - i;
    let number = numberString[i].padEnd(zeros, 0);
    if (realNumber > 0 && i > 0) {
      output = output.concat(` + `);
    }
    if (i + 1 !== numberString.length && realNumber > 0 && numberString[i + 1] !== 0) {
      output = output.concat(`${number}`);
    } else if (realNumber > 0 && i + 1 == numberString.length) {
      output = output.concat(number);
    }
  }
  return output;
}


Test.assertEquals(expandedForm(12), '10 + 2');
Test.assertEquals(expandedForm(42), '40 + 2');
Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');