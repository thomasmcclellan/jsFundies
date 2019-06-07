//* 4/30/2019

function isBelowThreshold(currentValue) {
    return currentValue < 40
}

let array1 = [1, 30, 39, 29, 10, 13]

console.log(array1.every(isBelowThreshold)) // true

/*
Syntax:
arr.every(callback[, thisArg])

callback: function to test for each element, taking three arguments:
    Element: the current element being prcessed in the array
    Index (optional): index of the current element being processed in the array
    Array (optional): array --every-- is called upon
thisArg (optional): value to use as --this-- when executing callback

Return value:
--true-- if the callback function returns a truthy value for EVERY array element; otherwise, --false--.
*/

/*
Description:
The --every-- method executes the provided --callback-- function once for each element present in the array until it finds one where --callback-- returns a falsy value.  If such an element is found, the --every-- method immediately returns --true--.  --callback-- is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.

--callback-- is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

If a --thisArg-- parameter is provided to --every--, it will be used as callback's --this-- value.  Otherwise, the value --undefined-- will be used as its --this-- value.  The --this-- value ultimately observable by --callback-- is determined according to the usual parameters for determining the --this-- seen by a function.

--every-- does not mutate the array on which it is called.

The range of elements processed by --every-- is set before the first invocation of --callback--.  Elements which are appended to the array after the call to --every-- begins will not be visited by --callback--.  If existing elements of the array are changed, their value as passed to --callback-- will be the value at the time --every-- visits them; elements that are deleted are not visited.

--every-- acts like the 'for all' quantifier in mathematics.  In particular, for an empty array, it returns --true--.
*/

function isBigEnough(element, index, array) {
  return element >= 10
}

console.log([12, 5, 8, 130, 44].every(isBigEnough)) // false
console.log([12, 54, 18, 130, 44].every(isBigEnough)) // true

console.log([12, 5, 8, 130, 44].every(x => x >= 10)) // false
console.log([12, 54, 18, 130, 44].every(x => x >= 10)) // true

/*
Browser Compatibility:
Full Support: All
Compatibility Unknown: NA
No Support: NA
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every