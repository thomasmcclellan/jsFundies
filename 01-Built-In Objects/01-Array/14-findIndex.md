##### 5/06/2019
# `Array.prototype.findIndex()`

```js
const array1 = [5, 12, 8, 130, 44]

function isLargeNumber(element) {
  return element > 13
}

console.log(array1.findIndex(isLargeNumber)) // 3
```

---

## Syntax:
`arr.findIndex(callback(element[, index[, array]])[, thisArg])`

* **callback**: a function to execute on each value in the array until the function returns `true`, indicating that the satsfying element was found.  It takes 3 arguments:
  * **element**: the current element being processed in the array
  * **index (optional)**: the index of the current element being processed
  * **array (optional)**: the array `findIndex` was called upon
* **thisArg (optional)**: object to use as `this` when executing `callback`

## Return value:
The index of the first element in the array that passes the test; otherwise, -1.

---

## Description:
The `findIndex` method executes the `callback` function once for every index 0..length-1 (inclusive) in the array until it finds the one where `callback` returns a truthy value.

If such an element is found, `findIndex` immediately returns the element's index.  If the callback never returns a truthy value (or the array's length is 0), `findIndex` returns -1.  Unlike other array methods, such as `Array.some`, the callback **IS CALLED** even for indexes with unassigned values.

If a `thisArg` parameter is passed, it will be used as the `this` inside each invocation of the `callback`.  If it is not provided, the `undefined` is used.

The range of elements processed by `findIndex` is set before the first invocation of `callback`.  It will not process the elements appended to the array after the call to `findIndex` begins.  If an existing, unvisited element of the array is changed by `callback`, its value passes to the `callback` will be the value at the time `findIndex` visits the element's index.  Elements that are deleted are still visited.

---

```js
function isPrime(element, index, array) {
  let start = 2
  while (start <= Math.sqrt(element)) {
    if (element % start < 1) {
      return false
    } else {
      start++
    }
  }
  return element > 1
}

console.log([4, 6, 8, 12].findIndex(isPrime)) // -1 (not found)
console.log([4, 6, 7, 12].findIndex(isPrime)) // 2 (array[2] is 7 (prime))


const fruits = ['apple', 'banana', 'cataloupe', 'blueberries', 'grapefruit']

const index = fruits.findIndex(fruit => fruit === 'blueberries')

console.log(index) // 3
console.log(fruits[index]) // blueberries
```

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All others</span>  
**Compatibility Unknown**: NA  
<span style="color: red">**No Support**: IE</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)