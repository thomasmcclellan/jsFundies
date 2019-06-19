##### 5/16/2019
# `Array.prototype.map()`

```js
const arr1 = [1, 4, 9, 16]

// Pass a function to map
const map1 = arr1.map(x => x * 2)

console.log(map1) // [2, 8, 18, 32]
```

---

## Syntax:
`const new_arr = arr.map(function callback(currentValue[, index[, array]]) {
  Return element for new_array
}[, thisArg])`

* **callback**: function that produces an elment of the new Array, taking three arguments:
  * **currentValue**: current element being processed in the array
  * **index (optional)**: index of the current element being processed in the array
  * **array (optional)**: array `map` when executing `callback`
* **thisArg (optional)**: value to use `this` when executing `callback`

## Return value:
A new array with each element being the result of the callback function

---

## Description:
`map` calls a provided `callback` function **ONCE FOR EACH ELEMENT** in an array, in order, and constructs a new array from the results.  `callback` is invoked only for indexes of the array which have assigned values, including `undefined`.  It is not called for missing elements of the array (that is, indexes that have never been set, which have been deleted, or which have never been assigned a value).

Since `map` builds a new array, using it when you aren't using the returned array is an anti-pattern; use `forEach` or `for-of` instead.  Signs you shouldn't be using map:  
  >You're not using the array it returns  
  You're not returning a value from the `callback`

`map` does not mutate the array on which it is called (although `callback`, if invoked, may do so).

The range of elements processed by `map` is set before the first invocation of `callback`.  Elements which are appended to the array after the call to `map` begins will not be visited by `callback`.  If existing elements of the array are changed, their value as passed to `callback` will be the value at the time `map` visits them.  Elements that are deleted after the call to `map` begins and before visited are not visited.

Due to the algorithm defined in the specification if the array which `map` was called upon is sparse, resulting array will also be sparse, keeping same indices blank.

---

```js
const numbers = [1, 4, 9]
const roots = numbers.map(num => Math.sqrt(num))

console.log(numbers) // [1, 4, 9]
console.log(roots) // [1, 2, 3]


const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
]
const reformattedArray = kvArray.map(obj => {
  let rObj = {}
  rObj[obj.key] = obj.value
  return rObj
})

console.log(kvArray) // [{ key: 1, value: 10 }, { key: 2, value: 20 }, { key: 3, value: 30 }]
console.log(reformattedArray) // [{ '1': 10 }, { '2': 20 }, { '3': 30 }]


const doubles = numbers.map(num => num * 2)

console.log(doubles) // [2, 8, 18]


// Map on a string to get an array of bytes in the ASCII encoding of character values
const map = Array.prototype.map
const a = map.call('Hello World', x => x.charCodeAt(0))

console.log(a) // [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
```

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 5.1 | 2011 | Standard | Initial definition |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)