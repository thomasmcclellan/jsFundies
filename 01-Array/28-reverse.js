//* 5/24/2019

const arr1 = ['one', 'two', 'three']

console.log(arr1) // ['one', 'two', 'three']

const reversed = arr1.reverse()

console.log(reversed) // ['three', 'two', 'one']

//* BE AWARE: Existing array mutated
console.log(arr1) // ['three', 'two', 'one']
 
/*
Syntax:
arr.reverse()

Return value:
The reversed array
*/

//* Reversing the elements in an array-like object
const arrObj = {
  0: 'First',
  1: 'Second',
  2: 'Third',
  length: 3
}

console.log(arrObj) // { 0: 'First', 1: 'Second', 2: 'Third', length: 3 }

Array.prototype.reverse.call(arrObj) //* same syntax for using apply()

console.log(arrObj) // { 0: 'Third', 1: 'Second', 2: 'First', length: 3 }

/*
Browser Compatibility:
*Full Support: All
Compatibility Unknown: NA
No Support: NA
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse