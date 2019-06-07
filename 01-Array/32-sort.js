//* 5/31/2019

const months = ['March', 'Jan', 'Feb', 'Dec']

months.sort()

console.log(months) // ['Dec', 'Feb', 'Jan', 'March'] - Alphabetical

const numbers = [1, 30, 4, 21, 100000]

numbers.sort()

console.log(numbers) // [1, 100000, 21, 30, 4]

/*
Syntax:
arr.sort([compareFunction])

compareFunction (optional): specifies a function that defines the sort order.  If omitted, the array elements are converted to strings, then sorted according to each character's --unicode-- code point value.
  firstE1: first element for comparison
  secondE1: second element for comparison

Return value:
The sorted array.  NOTE: the array is sorted IN PLACE, and no copy is made.
*/

/*
Browser Compatibility:
Full Support: All
Compatibility Unknown: NA
No Support: NA
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort