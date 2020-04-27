/*

Number Zoo Patrol

Background:
You're working in a number zoo, and it seems that one of the numbers has gone missing!

Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.

In case the zoo loses another number, they want your program to work regardless of how many numbers there are in total.

Task:
Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n). Return this missing number.

Note: huge lists will be tested.

Examples:
[1, 3, 4]  =>  2
[1, 2, 3]  =>  4
[4, 2, 3]  =>  1

https://www.codewars.com/kata/5276c18121e20900c0000235/train/javascript

*/


const quickSort = (array) => {
	if (array.length <= 1) { 
		return array;
	} else {

		let left = [];
		let right = [];
		let newArray = [];
		let pivot = array.pop();
		let length = array.length;

		for (let i = 0; i < length; i++) {
			if (array[i] <= pivot) {
				left.push(array[i]);
			} else {
				right.push(array[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

function findNumber(array) {
    // array.sort((a,b) => {
    //     return a - b;
    // });
    quickSort(array);

    for (let i = 0; i < array.length; i++) {
        if (array[i] + 1 !== array[i + 1] && array[i] !== array[array.length-1]) {
            return array[i] + 1;
        }
    }
    if (array[0] === 1) {
      return array[array.length-1] + 1;
    } else {
      return 1;
    }
}