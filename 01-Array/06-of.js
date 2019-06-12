//* 4/24/2019

console.log(Array.of(7)) // 7
console.log(Array.of(1, 2, 3)) // [1, 2, 3]

console.log(Array(7)) // [ , , , , , , ]
console.log(Array(1, 2, 3)) // [1, 2, 3]

/*
Syntax:
Array.of(element0[, element1[, ...[, elementN]]])

elementN: elements of which to create the array

Return value:
a new --Array-- instance
*/

/*
The --Array.of()-- method creates a new --Array-- instance from a variable number of arguments, regardless of type of the arguments.

The difference between --Array.of()-- and the --Array-- constructor is the handling of integer arguments: --Array.of(7)-- creates an arra with a single element (7); whereas --Array(7)-- creates an empty array with a --length-- property of 7 (refer to example above).
*/

/*
Browser Compatibility:
*Full Support: All others
Compatibility Unknown: NA
!No Support: IE
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of