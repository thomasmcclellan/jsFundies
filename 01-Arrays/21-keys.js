//* 5/15/2019

const array1 = ['a', 'b', 'c']
const iterator = array1.keys()

for (const key of iterator) {
  console.log(key) // 0, 1, 2
}

/*
Syntax:
arr.keys()

Return value:
A new Array iterator object
*/

const arr = ['a', , 'c']
const sparseKeys = Object.keys(arr)
const denseKeys = [...arr.keys()]

console.log(sparseKeys) // ['0', '2']
console.log(denseKeys) // [0, 1, 2]

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys