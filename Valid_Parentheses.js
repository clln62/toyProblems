/* 

Valid Parentheses


Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true



https://www.codewars.com/kata/valid-parentheses/train/javascript


*/



function validParentheses (parens) {
    // create an open paren variable
    const open = '(';
    // create a close paren variable
    const closed = ')';
    // create a count
    let count = 0;
    // loop through parens
    for (let i = 0; i < parens.length; i++) {
        // if open
        if (parens[i] === open) {
            // add to count
            count++;
        }
        // if closed
        if (parens[i] === closed) {
            // remove from count
            count--;
        }
        // if count less than 0
        if (count < 0) {
            // return false
            return false;
        }
    }
    // if count is equal to 0
    if (count === 0) {
        // return true
        return true;
        // else
    } else {
        // return false
        return false;
    }
}