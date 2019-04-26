//* 4/17/2019

// Create an Array
let fruits = ['Apple', 'Banana']

// Access (index into) an Array item
let first = fruits[0]

let last = fruits[fruits.length - 1]

// Loop over an Array
fruits.forEach((item, index, array) => {
    return item
})

// Add to the end of an Array
let newLength = fruits.push('Orange')

// Remove from the end of an Array
let last = fruits.pop()

// Remove from the front of an Array
let first = fruits.shift()

// Add to the front of an Array
let first = fruits.unshift('Strawberry')

// find the index of an item in an Array
fruits.push('Mango')

let pos = fruits.indexOf('Banana')

// Remove an item by index position
let removedItem = fruits.splice(pos, 1)

// Remove items from an index position
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']

let pos = 1, n = 2

let removedItems = vegetables.splice(pos, n)

// Copy an Array
let shallowCopy = fruits.slice()

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array