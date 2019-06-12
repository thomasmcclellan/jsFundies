//* 5/08/2019

const arr1 = [1, 2, 3, 4]

console.log(arr1.map(x => [x * 2])) // [[2], [4], [6], [8]]

console.log(arr1.flatMap(x => [x * 2])) // [2, 4, 6, 8]
console.log(arr1.flatMap(x => [[x * 2]])) // [[2], [4], [6], [8]]

const arr2 = ['It is sunny in', '', 'California']

console.log(arr2.map(x => x.split(' '))) // [['It', 'is', 'sunny', 'in'], [''], ['California']]

console.log(arr2.flatMap(x => x.split(' '))) // ['It', 'is', 'sunny', 'in', '', 'California']

/*
Syntax:
let new_arr = arr.flatMap(function callback(currentValue[, index[, array]])) {
  return element for new_array
}[, thisArg])

callback: function that produces an element of the new Array, taking three arguments:
  currentValue: current element being processed in the array
  index (optional): index of the current element being processed in the array
  array (optional): array --map-- was called upon
thisArg (optional): value to use as --this-- when executing --callback--

Return value:
A new array with each element being the result of the callback function and flattened to a depth of 1.
*/

/*
Browser Compatibility:
*Full Support: All others
Compatibility Unknown: NA
!No Support: 
!  Edge
!  IE
!  Edge Mobile
!  Samsung Internet
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap