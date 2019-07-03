/*Postfix notation (also known as Reverse Polish notation) is an alternative way of 
representing algebra expressions. For example, take the following expression:

2 + 5 * 8
This "normal" notation that we see everyday is called infix notation. Infix notation 
places its math operators in-between the numbers.

Infix notation also has order of operations. The previous example will be interpreted 
as 2 + (5 * 8), because multiplication comes before addition. This makes it difficult 
to write a program to parse infix expressions.

In contrast, postfix notation is much easier to parse, albeit it looks weird at first. 
Postfix notation places math operators after the numbers. For example, the previous 
infix example can be re-written in postfix notation like this:

2 5 8 * +
This expression should be read from left to right, one number / operator at a time. 
In doing so, you must keep a stack of numbers that wait to be operated on.

I attached a photo of an example that walks through this

Examples to test: 
"1 5 8 * +" // expected: 41
"1 5 8 + *" // expected: 13
"100 2 / 25 +" // expected: 75*/




// create a function called calculate that takes in a string
function calculate (string) {
    let array = string.split(' ')
    // console.log(string)
    // create stack array
    let stack = [];
    // create number equal to 0
    let numberOne = 0;
    let numberTwo = 0;
    // loop through string
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '*') {
          numberOne = stack.pop();
          numberTwo = stack.pop();
          numberOne = numberOne * numberTwo
          stack.push(numberOne);
          // array.splice(i, 1)
          // i -= 1;
        }
         if (array[i] === '+') {
          numberOne = stack.pop();
          numberTwo = stack.pop();
          numberOne = numberOne + numberTwo
          stack.push(numberOne);
        }
         if (array[i] === '-') {
          numberOne = stack.pop();
          numberTwo = stack.pop();
          if (numberOne > numberTwo) {
            numberOne = numberOne - numberTwo;
          } else {
            numberOne = numberTwo - numberTwo;
          }
          stack.push(numberOne);
        }
         if (array[i] === '/') {
          numberOne = stack.pop();
          numberTwo = stack.pop();
          if (numberOne > numberTwo) {
          stack.push(numberOne/numberTwo)
          } else {
            stack.push(numberTwo/numberOne)
          }
          // stack.push(numberOne);
        }
        // if element is a number
        if (typeof (array[i] * 1) == 'number' && array[i] !== '*' && array[i] !== '+' && array[i] !== '-' && array[i] !== '/') {
            // push into stack
            stack.push(array[i] * 1);
            // console.log(stack)
        } 
    }
    // return the element from the stack as a number
    return stack.pop();
}










// console.log(`Test1: for input "1 5 8 * +", expected 41 and got ${calculate('1 5 8 * +')}`);
// console.log(`Test2: for input "1 5 8 + *", expected 13 and got ${calculate('1 5 8 + *')}`);
console.log(`Test3: for input "100 2 / 25 +", expected 75 and got ${calculate('100 2 / 25 +')}`);
// console.log(`Test4: for input ".5 .5 +", expected 1 and got ${calculate('.5 .5 +')}`);