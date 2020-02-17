/*

Kebabize

Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps

Notes:

the returned string should only contain lowercase letters

https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript

*/



function kebabize(str) {
    // create an output string
    let output = '';
    // loop through str
    for (let i = 0; i < str.length; i++) {
        // if letter is lower case
        if (str[i] === str[i].toLowerCase() && str[i].toLowerCase() !== str[i].toUpperCase()) {
            // add letter to new string
            output = output.concat(str[i]);
        } else if (str[i] === str[i].toUpperCase() && str[i].toLowerCase() !== str[i].toUpperCase() && output.length !== 0) {
            // if capital letter
                // add a dash
            output = output.concat('-');
                // add lower case version of letter to new string
            output = output.concat(str[i].toLowerCase());
        } else if (str[i].toLowerCase() !== str[i].toUpperCase()) {
            output = output.concat(str[i].toLowerCase());
        }
    }
    // return output string
    return output;
  }