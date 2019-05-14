//* 4/18/2019

let clothing = ['shoes', 'shirts', 'socks', 'sweaters']

console.log(clothing.length) // 4

let nameListA = new Array(9876543210)
let nameListC = new Array(-100)

nameListA.length //! RangeError: Invalid array length
nameListC.length //! RangeError: Invalid array length

let nameListB = []
nameListB.length = Math.pow(2,32) - 1 // set array length less than 2^32

console.log(nameListB.length) // 4294967295

const arr = [1, 2]
arr.length = 5 //* set array length to 5 while currently 2
console.log(arr) // [1, 2, , , ]

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length