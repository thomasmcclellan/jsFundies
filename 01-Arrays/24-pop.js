//* 5/20/2019

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

console.log(plants.pop()) // tomato
console.log(plants) // ['broccoli', 'cauliflower', 'cabbage', 'kale']

plants.pop()

console.log(plants) //['broccoli', 'cauliflower', 'cabbage']

/*
Syntax:
arr.pop()

Return value:
The removed element from the array; --undefined-- if the array is empty
*/

/*
Description:
--pop-- removes the last element from an array and retursn said value to the caller.

--pop-- is intentionally generic; this method can be CALLED or APPLIED to objects resembling arrays.  Objects which do not contain a --length-- property reflecting the last in the series of consecutive, zero-based numerical properties may not behave in any meaningful manner.
*/

/*
Browser Compatibility:
Full Support: All
Compatibility Unknown: NA
No Support: NA
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop