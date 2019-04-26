//* 4/23/2019

Array.isArray([1, 2, 3]) // true
Array.isArray({ foo: 123 }) // false
Array.isArray('foobar') // false
Array.isArray(undefined) //false

/*
Syntax:
Array.isArray(value)

value: the value to be checked

Return value:
--true-- is the value is an --Array--; otherwise --false--
*/


//* instanceof vs isArray
// When checking for --Array-- instance, Array.isArray is preferred over --instanceof-- because it works through --iframes--.

let iframe = document.createElement('iframe')
document.body.appendChild(iframe)
xArray = window.frames[window.frames.length - 1].Array

let arr = new xArray(1,2,3) // [1, 2, 3]

//* Correctly checking for Array
Array.isArray(arr) // true

//* Considered harmful, because doesn't work through iframes
arr instanceof Array // false

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray