##### 5/02/2019
# `Array.prototype.filter()`

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
const result = words.filter(word => word.length > 6)

console.log(result) // ['exuberant', 'destruction', 'present']
```

---

## Syntax:
`arr.filter(callback(element[, index[, array]])[, thisArg])`

* **callback**: function is a predicate, to test each element of the array.  Return `true` to keep the element, `false` otherwise.  It accepts three arguments:
    * **element**: the current element being processed in the array
    * **index (optional)**: the index of the current element being processed in the array
    * **array (optional)**: the array `filter` was called upon
* **thisArg (optional)**: value to use as `this` when executing `callback`

## Return value:
A new array with the elements that passed the test.  If no elements pass the test, an empty array will be returned.

---

## Description:
`filter` calls a provided `callback` function once for each element in an array, and constructs a new array of all the values for which `callback` returns a value that coerces to `true`.  `callback` is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.  Array elements which do not pass the `callback` test as simply skipped, and are not included in the new array.

If a `thisArg` parameter is provided to `filter`, it will be used as the callback's `this` value.  Otherwise, the value `undefined` will be used as its `this` value.  The `this` value ultimately observable by `callback` is determined according to the usual rules for determining the `this` seen by a function.

`filter` does not mutate the array on which it is called.

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)