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
    let starCount = (nFloors * 2) - 1;
    let output = [];
    let holder = '';
    for (let i = 0; i < starCount; i++) {
        holder += '*';
    }
    output.push(holder);

    let replaceCount = 1;
    while (replaceCount < nFloors) {
        holder = holder.split('');
        holder[replaceCount - 1] = ' ';
        holder[holder.length - replaceCount] = ' ';
        holder = holder.join('');
        output.unshift(holder);
        replaceCount++;
    }
    return output;
}