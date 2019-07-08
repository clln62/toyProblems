// // inputs: string 
// // outputs: array of starting and ending index of longest run

// function longestRun(string) {
//     // create an array
//     let holder = [];
//     // create a result array
//     let result = [];
//     // create count equal to 1
//     let count = 1;
//     // loop through string
//     for ( let i = 0; i < string.length; i++) {
//       if (holder.length < 1) {
//         holder.push([string[i], i, count]);
//       } else {
//         // loop through array
//         for(let j = 0; j < holder.length; j++) {
//             // if string element is not in array
//             console.log(holder[j])
//             if (!holder[j].includes(string[i]) || holder[j] === undefined) {
//                 // push into array as mini array with letter, index, and count
//                 holder.push([string[i], i, count]);
//             }
//             // if string element is in the array
//             if (holder[j].includes(string[i])) {
//                 // add to count
//                 holder[j][2]++;
//             }
//           }
//         }
//         // if (!holder.includes(string[i])) {
//         //     holder.push([i, count]);
//         //     console.log(holder)
//         // } else {
//         //     for (let j = 0; j < holder.length; j++) {
//         //         if (holder[j].includes(string[i])) {
//         //             holder[j][1]++;
//         //         }
//         //     }
//         // }
//     }
//     // loop through array
//     for (let i = 0; i < holder.length; i++) {
//         // if result array is empty
//         if (result.length < 1) {
//             // push first tuple into result
//             result.push(holder[i]);
//         }
//         // if index 1 in tuple is greater than the tuple in result
//         if (holder[i][1] > result[0][1]) {
//             // replace tuple in result with greater value
//             result.pop();
//             result.push(holder[j]);
//         }
//     }
//     if(result.length < 1) {
//       return [0,0];
//     }
//     // return result
//     return result;
//   };
  
//   console.log(`Test1: expected [1,3] and got [${longestRun('abbbcc')}]`);
//   console.log(`Test2: expected [0,1] and got [${longestRun('aabbc')}]`);
//   console.log(`Test3: expected [0,0] and got [${longestRun('')}]`);
//   console.log(`Test4: expected [2,3] and got [${longestRun('mississippi')}]`);
//   console.log(`Test5: expected [0,0] and got [${longestRun('abcdefgh')}]`);
//   console.log(`Test6: expected [2,8] and got [${longestRun('abccccccc')}]`);





// inputs: string 
// outputs: array of starting and ending index of longest run

function longestRun(string) {
    // create an object holder
    let holder = {};
    // create a count set to 1
    let count = 1;
    // loop through string
    for (let i = 0; i < string.length; i++) {
      // if holder does not have a key with the string element
      if (!holder[string[i]]) {
        // set key in holder with an object as its property that holds the letters index and count
        holder[string[i]] = { 
          index: i,
          counter: count,
        }
      } else {
      // else
        // increment count
        holder[string[i]].counter++;
      }
    }
    // create a result array
    let result = [];
    // loop through object
    for (let key in holder) {
      // if array is empty  
      if (result.length < 1) {
        // place index and count into array as a tuple
        result.push(key.index, key.counter)
      }
      // if count is greater than result index 1
      if (key.counter > result[1]) {
        // replace object index and count in the array
        result.pop();
        result.push(key.index, key.counter)
      }
      
    }

    // return array
    return result;
}

  console.log(`Test1: expected [1,3] and got [${longestRun('abbbcc')}]`);
  console.log(`Test2: expected [0,1] and got [${longestRun('aabbc')}]`);
  console.log(`Test3: expected [0,0] and got [${longestRun('')}]`);
  console.log(`Test4: expected [2,3] and got [${longestRun('mississippi')}]`);
  console.log(`Test5: expected [0,0] and got [${longestRun('abcdefgh')}]`);
  console.log(`Test6: expected [2,8] and got [${longestRun('abccccccc')}]`);