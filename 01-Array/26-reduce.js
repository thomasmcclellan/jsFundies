//* 5/21/2019

const array1 = [1, 2, 3, 4]
const reducer = (accumulator, currentValue) => accumulator + currentValue

//* 1 + 2 + 3 + 4
console.log(array1.reduce(reducer)) // 10

//* 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5)) // 15

/*
Syntax:
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

callback: function to execute on each element in the array (except for the first, if no --initialValue-- is supplied), taking 4 arguments:
  accumulator: accumulates the --callback's-- return values.  It is the accumulated value previously returned in the last invocation of the --callback--, or --initialValue--, if supplied
  currentValue: current element being processed in the array
  currentIndex (optional): index of the current element being processed in the array.  Starts from 0 if an --initialValue-- is provided; otherwise, starts from 1
  array (optional): array --reduce-- was called upon
initialValue (optional): value to use as the first argument to the first call of the --callback--.  If no --initalValue-- is supplied, the first element in the array will be used.* 

Return value:
The single value that results from the reduction.
*/

//! * Calling --reduce-- on an empty array without an --initialValue-- will throw a TypeError

/*
Description:
The first time the callback is called, --accumulator-- and --currentValue-- can be one of two values.  If --initialValue-- is provided in the call to --reduce--, then --accumulator-- will be equal to --initialValue--, and --currentValue-- will be equal to the first value in the array.  If no --initialValue-- is provided, then --accumulator-- will be equal to the first value in the array, and --currentValue-- will be equal to the second.
*/

//* How --reduce-- works
[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue)

/*
The --callback-- would be invoked four times, with the arguments and return values in each call being as follows:

callback      accumulator   currentValue  currentIndex  array             return value
first call    0             1             1             [0, 1, 2, 3, 4]   1
second call   1             2             2             [0, 1, 2, 3, 4]   3
third call    3             3             3             [0, 1, 2, 3, 4]   6
fourth call   6             4             4             [0, 1, 2, 3, 4]   10

The value returned by --reduce-- would be that of the last callback invocation (10).
*/

//* If you provide the --initialValue-- as the second argument to --reduce--, the result would look like:
[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue
}, 10)

/*
callback      accumulator   currentValue  currentIndex  array             return value
first call    10            0             0             [0, 1, 2, 3, 4]   10
second call   10            1             1             [0, 1, 2, 3, 4]   11
third call    11            2             2             [0, 1, 2, 3, 4]   13
fourth call   13            3             3             [0, 1, 2, 3, 4]   16
fourth call   16            4             4             [0, 1, 2, 3, 4]   20

The value returned by --reduce-- in this case is 20.
*/

//* Sum of values in an object array
const initalValue = 0
const sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce((accumulator, currentValue) => accumulator + currentValue.x, initalValue)

console.log(sum) // 6

//* Flatten an array of arrays
const flattened = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])

console.log(flattened) // [0, 1, 2, 3, 4, 5]

//* Counting instances of values in an object
const names = ['Alice', 'Bob', 'Tiffany', 'Bruce', 'Alice']
const countedNames = names.reduce((allNames, name) => {
  (name in allNames) ? allNames[name]++ : allNames[name] = 1
  return allNames
}, {})

console.log(countedNames) // { Alice: 2, Bob: 1, Tiffany: 1, Bruce: 1 }

//* Grouping objects by a property
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
]

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property]
    if (!acc[key]) acc[key] = []
    acc[key].push(obj)
    
    return acc
  }, {})
}

const groupedPeople = groupBy(people, 'age')

console.log(groupedPeople) // { '20': [{ name: 'Max', age: 20 }, { name: 'Jane', age: 20 }], '21': [{ name: 'Alice', age: 21 }] }

/*
Browser Compatibility:
*Full Support: All
Compatibility Unknown: NA
No Support: NA
*/

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce