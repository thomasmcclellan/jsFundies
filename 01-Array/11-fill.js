//* 5/01/2019

let array1 = [1, 2, 3, 4]

//* Fill with 0 from postion 2 until position 4
console.log(array1.fill(0, 2, 4)) // [1, 2, 0, 0]

//* Fill with 5 from position 1
console.log(array1.fill(5, 1)) // [1, 5, 5, 5]

console.log(array1.fill(6)) // [6, 6, 6, 6]

/*
Syntax:
arr.fill(value[, start[, end]])

value: value to fill an array
start (optional): start index; defaults to 0
end (optional): end index; defaults to --this.length--

Return value:
The modified array
*/

/*
Description:
The --fll-- method takes up to three arguments: --value--, --start--, and --end-- (see above).

If --start-- is negative, it is treated as --length + start-- where --length-- is the length of the array.  If --end-- is negative, it is treated as --length + end--.

--fill-- is intentionally generic; it does not require that is --this-- value be an Array object.  It is also a mutable method; it will change --this-- object itself, and return it--not just return a copy of it.

When --fill-- gets passed an object, it will copy the reference and fill the array with references to that object.
*/

console.log([1, 2, 3].fill(4))                   // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1))                // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2))             // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1))             // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3))             // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -3))           // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN))         // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5))             // [1, 2, 3]
console.log(Array(3).fill(4));                   // [4, 4, 4]
console.log([].fill.call({ length: 3 }, 4))      // { 0: 4, 1: 4, 2: 4, length: 3 }

/*
Browser Compatibility:
*Full Support: All others
Compatibility Unknown: NA
!No Support: IE
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill