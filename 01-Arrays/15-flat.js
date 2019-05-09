//* 5/07/2019

const arr1 = [1, 2, [3, 4]]
arr1.flat() // [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]]
arr2.flat() // [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]]
arr3.flat(2) // [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, , 4, 5]
arr4.flat() // [1, 2, 4, 5]

/*
Syntax:
let newArray = arr.flat([depth])

depth (optional): the depth level specifying how deep a nestd array structure should be flattened; defaults to 1.

Return value:
A new array with the sub-array elements concatenated into it
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat