//* 6/10/2019

/*
Syntax:
ar[Symbol.iterator]()

Return value:
The initial value given by the --values-- iterator.  By default, using --arr[Symbol.iterator]-- will return the --values-- function.
*/

const arr = ['a', 'b', 'c', 'd', 'e']
const eArr = arr[Symbol.iterator]()

for (let letter of eArr) console.log(letter) // a b c d e

/*
Browser Compatibility:
*Full Support: All others
?Compatibility Unknown: Edge Mobile
!No Support: IE
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator