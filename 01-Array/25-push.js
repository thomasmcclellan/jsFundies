//* 5/20/2019

const animals = ['pigs', 'goats', 'sheep']

console.log(animals.push('cows')) // 4
console.log(animals) // ['pigs', 'goats', 'sheep', 'cows']

animals.push('chickens')

console.log(animals) // ['pigs', 'goats', 'sheep', 'cows', 'chickens']

/*
Syntax:
arr.push(element[, ...[, elementN]])

elementN: elements to add to the end of the array

Return value:
The new --length-- property of the object upon which the method was called.
*/

/*
Description:
--push-- appends values to an array.

--push-- is intentionally generic.  This method can be used with --call-- or --apply-- on objects resembling array.  --push-- relies on a --length-- property to determine where to start inserting the given values.  If the --length-- property cannot be converted into a number, the index used is 0.  This includes the possiblity of --length-- being nonexistent, in which case --length-- will also be created.

*/

//* Although --strings-- are native, Array-like objects, they are not suitable in applications of this method, as strings are immutable.  Similarly for native, Array-like object arguments.

const sports = ['soccer', 'baseball'];
const total = sports.push('football', 'swimming');

console.log(sports) // ['soccer', 'baseball', 'football', 'swimming']
console.log(total) // 4


const vegetables =  ['parsnip', 'potato'];
const moreVeg = ['celery', 'beetroot'];

//* Mege the second array into the first one
//* Equivalent to vegables.push('celery', 'beetroot')
Array.prototype.push.apply(vegetables, moreVeg)

console.log(vegetables) // ['parsnip', 'potato', 'celery', 'beetroot']

/*
Browser Compatibility:
*Full Support: All
Compatibility Unknown: NA
No Support: NA
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push