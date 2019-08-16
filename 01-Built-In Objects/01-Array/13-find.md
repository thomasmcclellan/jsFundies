##### 5/03/2019
# `Array.prototype.find()`

```js
const array1 = [5, 12, 8, 130, 44]

const found = array1.find(element => element > 10)

console.log(found) // 12
```

---

## Syntax:
`arr.find(callback[, thisArg])`

* **callback**: function to execute on each value in the array, taking three arguments:
    * **element**: the current element being processed in the array
    * **index (optional)**: the index of the current element being processed
    * **array (optional)**: the array `find` was called upon
* **thisArg (optional)**: object to use as `this` when executing `callback`

## Return value:
The value of the **FIRST** element in the array that satisfies the provided testing function; otherwise, `undefined` is returned.

---

## Description:
The `find` method executes the `callback` function once for each index of the array until it finds out where `callback` returns a `true` value.  if such an element is found, `find` immediately returns the value of that element.  Otherwise, `find` returns `undefined`.  `callback` is invoked for every index of the array from 0 to `length - 1` and is invoked for all indexes, not just those that have been assigned values.  This may mean that it's less efficient for sparse arrays than other methods that only visit indexes that have been assigned value.

`find` does not mutate the array on which it is called.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `find()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**45**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**25**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**32**</span> | **Opera** || 
| <span style="color: lightgreen">**8**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**8**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**4.0.0***</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

  > *From version 0.12: this feature is behind the `--harmony` runtime flag.

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)