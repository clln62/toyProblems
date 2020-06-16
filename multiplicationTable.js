/*
Multiplication table

Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]


https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript


*/



multiplicationTable = function(size) {
    // create an output array
    const output = [];
    // create a count starting at 1
    let count = 1;
    // create an holder array
    let holder = [];
    // create a helper function that takes in a size
    const helper = () => {
        // create an interation to build first array to length of size
        for (let i = 1; i <= size; i++) {
            // push each number multiplied by count into holder
            holder.push(i * count);
        }
    }
    // while count is less than size
    while (count <= size) {
        // call helper function
        helper();
        // push holder array into output
        output.push(holder);
        // reset holder
        holder = [];
        // increment count
        count++;

    }
    // return output
    return output;
}