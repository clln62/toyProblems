/* 

Create a Stack (and the push, pop, and size methods) 
using the Prototypal instantiation pattern, then 
refactor it to Pseudoclassical.

*/


// Prototypal


var Stack = function () {
    var newStack = Object.create(Stack.prototype);

    newStack.count = 0;
    newStack.storage = {};

    return newStack;
}

Stack.prototype.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
}

Stack.prototype.pop = function () {
    var popItem = this.storage[this.count-1];

    if (this.count > 0) {
        delete this.storage[this.count-1];
        this.count--;
    }

    return popItem;
}

Stack.prototype.size = function () {
    return this.count;
}



// Pseudoclassical

var Stack = function ( ) {
    this.storage = {};
    this.count = 0;
}

Stack.prototype.push = function (value) {
    this.storage[this.count++] = value;

}

Stack.prototype.pop = function ( ) {
    var itemToBePopped = this.storage[this.count-1];

    if (this.count > 0) {
        delete this.storage[--this.count];
    }

    return itemToBePopped;
}

Stack.prototype.size = function ( ) {
    return this.count;
}