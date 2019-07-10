function isBalanced (str) {
    // remove spaces from str
    str.split(' ').join('');
    // create a count for each symbol
    let parenCount = 0;
    let curlCount = 0;
    let brackCount = 0;
    // loop through str
    for (let i = 0; i < str.length; i++) {
        // if open and closing don't match up
            // return false
        if (str[i] === ')' && str[i-1] === '{') {
            return false;
        }
        if (str[i] === ')' && str[i-1] === '[') {
            return false;
        }
        if (str[i] === '}' && str[i-1] === '(') {
            return false;
        }
        if (str[i] === '}' && str[i-1] === '[') {
            return false;
        }
        if (str[i] === ']' && str[i-1] === '(') {
            return false;
        }
        if (str[i] === ']' && str[i-1] === '{') {
            return false;
        }
        // if element is '('
        if (str[i] === '(') {
            // add to parenCount
            parenCount++;
        }
        // if element is '('
        if (str[i] === ')') {
            // subtract from parenCount
            parenCount--;
        }
        // if element is '{'
        if (str[i] === '{') {
            // add one to curlCount
            curlCount++;
        }
        // if element is '}'
        if (str[i] === '}') {
            // subtract from curlCount
            curlCount--;
        } 
        // if element is '['
        if (str[i] === '[') {
            // add one to brackCount
            brackCount++;
        }
        // if element is ']'
        if (str[i] === ']') {
            // subtract one from brack count
            brackCount--;
        } 
        // if any count is less than 0
        if (parenCount < 0 || curlCount < 0 || brackCount < 0) {
            // return false
            return false;
        }
    }
    // if count is greater than 0
    if (parenCount > 0 || curlCount > 0 || brackCount > 0) {
        // return false
        return false;
    }
    // return true 
    return true;
  };
  
  console.log(`Test1: expected false and got ${isBalanced(')(')}`);
  console.log(`Test2: expected false and got ${isBalanced('()(()()()())((()(()()))')}`);
  console.log(`Test3: expected true and got ${isBalanced('[[[{{{((()))}}}]]]')}`);
  console.log(`Test4: expected true and got ${isBalanced('(((10 ) ()) ((?)(:)))')}`);
  console.log(`Test5: expected true and got ${isBalanced('(x + y) - (4)')}`);
  console.log(`Test6: expected false and got ${isBalanced('({)}')}`);
  console.log(`Test7: expected false and got ${isBalanced('[]]')}`);
  console.log(`Test8: expected false and got ${isBalanced('(50)(')}`);
  console.log(`Test9: expected true and got ${isBalanced('{}')}`);
  console.log(`Test10: expected false and got ${isBalanced('{')}`);
  console.log(`Test11: expected false and got ${isBalanced('[]}{()')}`);
  console.log(`Test12: expected false and got ${isBalanced(')))()(((')}`);
  console.log(`Test13: expected false and got ${isBalanced('}')}`);
  console.log(`Test14: expected true and got ${isBalanced('[{()}]')}`);
  console.log(`Test15: expected false and got ${isBalanced('[{]}')}`);
  console.log(`Test16: expected true and got ${isBalanced('[{}]')}`);