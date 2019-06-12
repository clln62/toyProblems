// find if Array elements are subsets of the input array.

Array.prototype.isSubsetOf = function(arr) {
  for(let i = 0; i < this.length; i++) {
    if (!arr.includes(this[i])) {
      return false;
    }
  }
  return true;
};





console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat'])) // => true
console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox'])) //=> false