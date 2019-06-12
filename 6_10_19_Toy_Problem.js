// create a queue using two stacks



// create in stack
var Stack1 = function () {
    // create storage and count
  this.storage = {};
  this.count = 0;
}

// functions below
// push(string) - Add a string to the top of the stack
Stack1.prototype.push = function (value) {
  // add value to storage with count as key
  this.storage[this.count] = value;
  // increment count
  this.count++;
};

// pop() - Remove and return the string on the top of the stack
Stack1.prototype.pop = function () {
  // decrement count
  this.count--;
  // save value to return
  var string = this.storage[this.count];
  // delete the last key, property added
  delete this.storage[this.count];
  // return string
  return string;
};

// size() - Return the number of items on the stack
Stack1.prototype.size = function () {
  // if more items were removed than added, return 0
  if (count < 0) {
    return 0;
  }
  // return count
  return count;
};




// create out stack (adjusted count in pop to work for my Queue, but now won't work on its own)
var Stack2 = function () {
    // create storage and count
  this.storage = {};
  this.count = 0;
}

// functions below
// push(string) - Add a string to the top of the stack
Stack2.prototype.push = function (value) {
  // add value to storage with count as key
  this.storage[this.count] = value;
  // increment count
  this.count++;
};

// pop() - Remove and return the string on the top of the stack
Stack2.prototype.pop = function () {
  // save value to return
  var string = this.storage[this.count];
  // delete the last key, property added
  delete this.storage[this.count];
  // increment count
  this.count++;
  // return string
  return string;
};

// size() - Return the number of items on the stack
Stack2.prototype.size = function () {
  // if more items were removed than added, return 0
  if (count < 0) {
    return 0;
  }
  // return count
  return count;
};



// create a queue and use stack 1 and 2
var Queue = function () {
// create a storage
  this.storage = {};
//   call for both stacks
  var input = new Stack1();
  var output = new Stack2();
};
// enqueue(string) - Add a string to the back of the queue
Queue.prototype.enqueue = function (value) {
  // save value in string with value, using stack 1
  return input.push(value);
};

// dequeue() - Remove and return the string at the front of the queue
Queue.prototype.dequeue = function () {
  // return value and delete using Stack 2
  return output.pop();
};

// size() - Return the number of items in the queue
Queue.prototype.size = function () {
  // return size using both stack 1 and 2
  return input.size() - output.size();
};