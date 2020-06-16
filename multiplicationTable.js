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
    const output = [];
    let count = 1;
    let holder = [];
    const helper = () => {
        for (let i = 1; i <= size; i++) {
            holder.push(i * count);
        }
    }
    while (count <= size) {
        helper();
        output.push(holder);
        holder = [];
        count++;

    }
    return output;
}