/* Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

JavaScript: returns an Array;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]


https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

*/




function towerBuilder(nFloors) {
    // set count by multiplying nFloors by 2 and subtracting 1
    let starCount = (nFloors * 2) - 1;
    // create an output array
    let output = [];
    // create a string holder
    let holder = '';
    // create a for loop that stops at count
    for (let i = 0; i < starCount; i++) {
        // creates '*' for the count in string holder
        holder += '*';
    }
    // push holder to output
    output.push(holder);
    // create a replace star with space count
    let replaceCount = 1;
    // while replace count less than nFloors
    while (replaceCount < nFloors) {
        // change front index and end index in string
        holder = holder.split('');
        holder[replaceCount - 1] = ' ';
        holder[holder.length - replaceCount] = ' ';
        holder = holder.join('');
        // unshift string to output
        output.unshift(holder);
        // increment replace count
        replaceCount++;
    }
    // return output
    return output;
}