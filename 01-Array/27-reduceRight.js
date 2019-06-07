//* 5/23/2019

const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight((accumulator, currentValue) => accumulator.concat(currentValue))

console.log(array1) // [4, 5, 2, 3, 0, 1]

/*
Syntax:
arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])

callback: function to execute on each element in the array (except for the first, if no --initialValue-- is supplied), taking 4 arguments:
  accumulator: accumulates the --callback's-- return values.  It is the accumulated value previously returned in the last invocation of the --callback--, or --initialValue--, if supplied
  currentValue: current element being processed in the array
  currentIndex (optional): index of the current element being processed in the array.  Starts from 0 if an --initialValue-- is provided; otherwise, starts from 1
  array (optional): array --reduce-- was called upon
initialValue (optional): value to use as the first argument to the first call of the --callback--.  If no --initalValue-- is supplied, the first element in the array will be used.* 

Return value:
The single value that results from the reduction.
*/

//! * Calling --reduce-- on an empty array without an --initialValue-- will throw a TypeError

/*
Browser Compatibility:
Full Support: All
Compatibility Unknown: NA
No Support: NA
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight