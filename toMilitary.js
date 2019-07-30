// function toMilitary(time) {
//   // if first index is a 0
//   if (time[0] === 0) {
//     // return time
//     return time;
//   }
//   // loop through string
//   for (let i = 0; i < time.length; i++) {
//     // if 'a' exist, 
//     if (time[i] === 'a') {
//       // remove am
//       time[i] = '';
//       time[i + 1] = '';
//       // add 0 to front
//       let zero = '0';
//       zero.concat(time)
//     }
//     // if 'p' exist
//     if (time[i] === 'p') {
//       // add 12 to first index
//       time[0] = time[0] + 12
//     }
//   }
// return time;
// }

// function toMilitary (time) {
//   // if first index is 0
//   if (time[0] === '0') {
//     // return time
//     return time;
//   }
//   // loop through time
//   for (let i = 0; i < time.length; i++) {
//     // if time element is equal to add
//     if (time[i] === 'a' && time[0,1] < 10) {
//       // add 0 to front
//       let zero = '0';
//       zero.concat(time);
//       console.log('hey')
//     }
//     // if 'p' exists
//       // add 12 to first index
//   }

//   // return time without am or pm
//   return time.slice (time, time.length-2)
// }


function toMilitary (time) {
  // if first index is 0
  if (time[0] === '0') {
    // return time
    return time;
  }
  if (time)
  let colon = ':';
  let arr = time.split(':')
  if (arr[0] < 10 && arr[1][2] === 'a') {
    let zero = '0';
    arr[0] = zero.concat(arr[0])
    arr[1] = colon.concat(arr[1])
  }
  if (arr[0] < 12 && arr[1][2] === 'p') {
    arr[0] = parseInt(arr[0] + 12);
    arr[1] = colon.concat(arr[1])
  }


  
  result = arr.join('').toString()
  // result = arr.toString(' ')

  return result.slice (time, time.length-1)
}


console.log(`Test1 expected ${toMilitary('12:00am')} to be 00:00`);
console.log(`Test2 expected ${toMilitary('7:47pm')} to be 19:47`);
console.log(`Test3 expected ${toMilitary('12:01am')} to be 00:01`);
console.log(`Test4 expected ${toMilitary('9:15am')} to be 09:15`);
console.log(`Test5 expected ${toMilitary('1:23am')} to be 01:23`);
console.log(`Test6 expected ${toMilitary('3:00pm')} to be 15:00`);
console.log(`Test7 expected ${toMilitary('12:00pm')} to be 12:00`);
console.log(`Test8 expected ${toMilitary('04:00')} to be 04:00`);