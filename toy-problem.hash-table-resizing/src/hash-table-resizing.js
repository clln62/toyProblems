/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
// const getIndexBelowMaxForKey = function(str, max) {
//   let hash = 0;
//   for (let i = 0; i < str.length; i++) {
//     hash = (hash << 5) + hash + str.charCodeAt(i);
//     hash = hash & hash; // Convert to 32bit integer
//     hash = Math.abs(hash);
//   }
//   return hash % max;
// };

// const makeHashTable = function() {
//   const result = {};
//   let storage = [];
//   let storageLimit = 4;
//   let size = 0;
  
  
//   result.insert = function(  ) {
//     // TODO: implement `insert`
   
//   };

//   result.retrieve = function(  ) {
//     // TODO: implement `retrieve`
   
//   };

//   result.remove = function(  ) {
//     // TODO: implement `remove`
   
//   };

//   return result;
// };



var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  var resizing = false;
 
	
//***Finish This Function***// 
  function resize(newSize) {
    // if size needs to increase
    if (newSize > storageLimit) {
      // double the storageLimit
      storageLimit = storageLimit * 2;
    } else {
      // else
      // decrease the storageLimit by 2
      storageLimit = storageLimit / 2;
    }
    // loop through storage
    for (var key in storage) {
        // call retrieve on key and save
        var val = result.retrieve(key);
        // call insert on key and saved above
        result.insert(key, val);
      }
  };


  
  
//*************************//  
  
  result.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var pairs = storage[index];
    var pair;
    var replaced = false;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        pair[1] = value;
        replaced = true;
      }
    }

    if (!replaced) {
      pairs.push([key, value]);
      size++;
    }
    if(size >= storageLimit * 0.75){
      // increase the size of the hash table
      resize(storageLimit * 2);
    }
  };

  result.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    if (!pairs) { return; }
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair && pair[0] === key) {
        return pair[1];
      }
    }
  };

  result.remove = function(key){

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        delete pairs[i];
        size--;
        if(size <= storageLimit * 0.25){
          // decrease the size of the hash table
          resize(storageLimit / 2);
        }
        return value;
      }
    }
  };
  
  //This next function you would never have for a hash table
  //It is here merely for testing purposes. So we can check that 
  //you are resizing correctly
  result.find = function(index){
    //return the bucket at a given index
    return storage[index];
  };
  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

module.exports = makeHashTable