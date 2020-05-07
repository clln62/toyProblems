/*

Validate my Password

I will give you a string. You respond with "VALID" if the string meets the 
requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:

More than 3 characters but less than 20.

Must contain only alphanumeric characters.

Must contain letters and numbers.

https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript

*/


function validPass(password){
    if (password.length < 3 || password.length > 20) {
        return "INVALID";
    }
    let foundNum = false;
    let foundLet = false;

    for (let i = 0; i < password.length; i++) {
        let char = password.charCodeAt(i);
        if (!(char > 47 && char < 58) && 
        !(char > 64 && char < 91) && 
        !(char > 96 && char < 123)) { 
            return "INVALID";
        } else if (!isNaN(parseInt(password[i]))) {
            foundNum = true;
        } else {
            foundLet = true;
        }

    }

    return foundNum && foundLet ? "VALID" : "INVALID";

}