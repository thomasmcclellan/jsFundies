##### 5/30/2019
# `Array.prototype.some()`

```js
const array = [1, 2, 3, 4, 5]
const even = element => element % 2 === 0

console.log(array.some(even)) // true
```

---

## Syntax:
`arr.some(callback(element[, index[, array]])[, thisArg])`

* **callback**: a funtion to test for each element, taking 3 arguments:
  element: the current element being processed in the array
  * **element**: current element being processed in the array
  * **index (optional)**: index of the current element being processed
  * **array (optional)**: array `some` was called upon
* **thisArg (optional)**: value to use as `this` when executing `callback` 

## Return value:
`true` if the callback function returns a truthy value for at least one element in the array; otherwise `false`.

---

```js
// Checking whether a value exists in an array
const fruits = ['apples', 'banana', 'mango', 'guava']

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal)
}

console.log(checkAvailability(fruits, 'kela')) // false
console.log(checkAvailability(fruits, 'banana')) // true

// Converting any value to Boolean
const TRUTHY_VALUES = [true, 'true', 1]

function getBoolean(value) {
  'use strict'

  if (typeof value === 'string') value = value.toLowerCase().trim()

  return TRUTHY_VALUES.some(t => t === value)
}

console.log(getBoolean(false)) // false
console.log(getBoolean('false')) // false
console.log(getBoolean(1)) // true
console.log(getBoolean('true')) // true
```

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)