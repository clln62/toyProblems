/*Given a roman numeral as input, write a function that converts the roman numeral 
to a number and outputs it.

In a roman numeral, each character adds its value to the total. See the helper 
object DIGIT_VALUES for the correspondence between roman numeral characters and 
integers.
VI = 6 (5 + 1 = 6)
LXX = 70 (50 + 10 + 10 = 70)
MCC = 1200 (1000 + 100 + 100 = 1200)

When a smaller numeral appears before a larger one, it becomes a subtractive 
operation. You can assume only one smaller numeral may appear in front of 
larger one.
IV = 4 (5 – 1 = 4)
XC = 90 (100 – 10 = 90)
CM = 900 (1000 – 100 = 900)

You should return “null” on invalid input.

You can use this DIGIT_VALUES object to help you!
var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

Examples: 
"LX" => 60
"IV" => 4
"horse" => "null"
"" => 0*/

function romanNumerals (numeral) {
    // if numeral is empty
    if (numeral.length < 1) {
        // return 0
        return 0;
    }
    let DIGIT_VALUES = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      };
    // create a sum holder set to 0
    let holder = 0;

    //   loop through numeral
    for (let i = 0; i < numeral.length; i++) {
        //   if element does not match any in DIGIT_VALUES
        if (DIGIT_VALUES[numeral[i]] === undefined) {
            //   return null
            return null;
        }
        // if the second value is greater than the first value
        if (DIGIT_VALUES[numeral[i]] > DIGIT_VALUES[numeral[i - 1]]) {
            // subtract first value from second and return
            holder+= DIGIT_VALUES[numeral[i]] - DIGIT_VALUES[numeral[i - 1]];
        // else if current element is greater than or equal to next element 
        } else if (DIGIT_VALUES[numeral[i]] >= DIGIT_VALUES[numeral[i + 1]]){
            //add each value to sum holder
            holder += DIGIT_VALUES[numeral[i]];
        }

    }

    // return sum holder
    return holder;
}


console.log(romanNumerals('MMXIX')) // => 2019
console.log(romanNumerals('CCCXIX')) // => 319
console.log(romanNumerals('MMMCDXXIV')) // => 3424


