//* 4/29/2019

let array1 = ['a', 'b', 'c']
let iterator1 = array1.entries()

console.log(iterator1.next().value) // [0, 'a']
console.log(iterator1.next().value) // [1, 'b']

/*
Syntax:
array.entries()

Return value:
A new --Array-- iterator object
*/

const a = ['a', 'b', 'c']

for (const [index, element] of a.entries()) {
  console.log(index, element) // 0 'a', 1, 'b', 2 'c'
}

let iterator = a.entries()

for (let e of iterator) {
  console.log(e) // [0, 'a'] [1, 'b'] [2, 'c']
}

/*
Browser Compatibility:
Full Support: All others
Compatibility Unknown: NA
No Support: IE
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries