//* 5/14/2019

const elements = ['Earth', 'Fire', 'Wind', 'Water']

console.log(elements.join()) // Earth,Fire,Wind,Water
console.log(elements.join('')) // EarthFireWindWater
console.log(elements.join('-')) // Earth-Fire-Wind-Water

/*
Syntax:
arr.join([separator])

separator (optional): specifies a string to separate each pair of adjacent elements of the array.  The separator is convertered to a string if necessary.  If omitted, the array elements are separated with a comma.  If the separator is an empty string, all elements are joined without any characters between them.

Return value:
A string with all array elements joined.  If --arr.length-- is 0, the empty string is returned.
*/

//* If an element in the array is --undefined-- or --null--, it is converted to an empty string.

function joined(first, second, third) {
  const values = Array.prototype.join.call(arguments)
  console.log(values) // '1,a,true'
}

joined(1, 'a', true)

/*
Browser Compatibility:
*Full Support: All
Compatibility Unknown: NA
No Support: NA
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join