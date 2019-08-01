/* Create a function that takes in a number and
outputs a string that represents that number's 
simplified fraction.

Whole numbers & mixed fractions should be returned 
as improper fractions.

examples:
input: 0.5, 3, 2.5, 2.75
output: "1/2", "3/1", "5/2", "11/4" */

/* Proper to inproper: https://www.calculatorsoup.com/calculators/math/mixed-number-to-improper-fraction.php */

/* Greatest Common Diviser: https://en.wikipedia.org/wiki/Greatest_common_divisor */

function fractionConverter (number) {
    // convert number to a string
    let stringNumber = number.toString();
    // set truty value to keep track of numbers before or after decimal
    let beforeDecimal = true;
    let result = "";
    let count = 0;
    // if string number does not include a decimal
    if (!stringNumber.include('.')) {
        // return the string with a concatted forward slash and one
        return stringNumber.concat('/1');
    }
    // while stringNumber length is less than 4
    while (stringNumber.length < 4) {
        // concat a 0
        stringNumber.concat('0');
    }
    // loop through string
    // for(let i = 0; i < stringNumber.length; i++) {
    //     // convert number string to a proper function
    //     // if you hit a decimal, change truthy value to false
    //     if(stringNumber[i] === '.') {
    //         beforeDecimal = false;
    //     }
    //     // if number is before decimal
    //     if (beforeDecimal === true) {
    //         // add to result
    //         result.concat(stringNumber[i]);
    //     } else if (beforeDecimal === false && count < 1) {
    //         count++;
    //         result.concat('.', stringNumber[i])
    //     } else {
    //         result.concat(stringNumber[i]);
    //     }
    // }
    stringNumber.concat('/100');
        // after all this, the string number should be something like 
        // 2.75/100
    let whole = [];
    // create top of fraction holder
    let top = [];
    // create bottom of fraction holder
    let bottom = [];
    // create truthy value
    let afterDecimal = false;
    // create second truthy value
    let topTruthy = true;
    // loop through stringNumber
    for (let i = 0; i < stringNumber.length; i++) {
        if (afterDecimal === false) {
            whole.push(stringNumber[i]);
        }
        if (stringNumber[i] === '.') {
            afterDecimal = true;
        }
        // if after decimal is true and top truthy is true
        if (afterDecimal === true && topTruthy === true) {
            // push element to top fraction holder
            top.push(stringNumber[i]);
        } else {
            // else
            // push to bottom fraction
            bottom.push(stringNumber[i]);
        }
        if (stringNumber[i] === '/') {
            topTruthy = false;
        }
    }
    // in example, at this point, whole should be [2], top should be [75], and bottom should be [100]
    // next we need to look at top and bottom to find the greatest common divisor
    // then we can create the calculations of converting from proper to improper fraction


    // calculate from example above to convert to improper fraction
}