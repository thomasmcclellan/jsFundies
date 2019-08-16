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

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 5.1 | 2011 | Standard | Initial definition |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `filter()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1.5**</span> | **Firefox** || 
| <span style="color: lightgreen">**9**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)