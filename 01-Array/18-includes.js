//* 5/10/2019

const arr1 = [1, 2, 3]

console.log(arr1.includes(2)) // true

const pets = ['cat', 'dog', 'bat']

console.log(pets.includes('cat')) // true
console.log(pets.includes('bunny')) // false

/*
Syntax:
arr.includes(valueToFind[, fromIndex])

valueToFind: value to search for
fromIndex (optional): the position in this array at which to begin searching for --valueToFind--; the first character to be searched is found at --fromIndex-- for positive values of --fromIndex--, or at --array.length + fromIndex-- for negative values of --fromIndex--.  Default is 0.

Return value:
A boolean which is --true-- if the value of --valueToFind-- is found within the array (or part of the array indicated by --fromIndex--, if specified).  Values of 0 are all considered to be equal regardless of sign (0 || -0; but --false-- != 0).
*/

/*
Browser Compatibility:
*Full Support: All others
Compatibility Unknown: NA
!No Support: IE
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes