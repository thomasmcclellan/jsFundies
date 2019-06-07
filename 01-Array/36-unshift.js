//* 6/06/2019

const arr1 = [1, 2, 3]

console.log(arr1.unshift(4, 5)) // 5
console.log(arr1) // [4, 5, 1, 2, 3]

/*
Syntax:
arr.unshift(element1[, ...[, elementN]])

elementN: elements to add to the front of the array

Return value:
The new --length-- property of the object upon which the method was called
*/

//* --unshift-- operates the same as --push--, with exception that it pushes to the front of the array, rather than the end.

/*
Browser Compatibility:
Full Support: All
Compatibility Unknown: NA
No Support: NA
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift