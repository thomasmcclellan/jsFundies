##### 5/23/2019
# `Array.prototype.reduceRight()`

```js
const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight((accumulator, currentValue) => accumulator.concat(currentValue))

console.log(array1) // [4, 5, 2, 3, 0, 1]
```

---

## Syntax:
`arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])`

* **callback**: function to execute on each element in the array (except for the first, if no `initialValue` is supplied), taking 4 arguments:
  * **accumulator**: accumulates the `callback's` return values.  It is the accumulated value previously returned in the last invocation of the `callback`, or `initialValue`, if supplied
  **currentValue**: current element being processed in the array
  * **currentIndex (optional)**: index of the current element being processed in the array.  Starts from 0 if an `initialValue` is provided; otherwise, starts from 1
  * **array (optional)**: array `reduce` was called upon
* **initialValue (optional)**: value to use as the first argument to the first call of the `callback`.  If no `initalValue` is supplied, the first element in the array will be used.* 

##### * Calling `reduce` on an empty array without an `initialValue` will throw a <span style="color: red">TypeError</span>.

## Return value:
The single value that results from the reduction.

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
| `reduceRight()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**3**</span> | **Firefox** || 
| <span style="color: lightgreen">**9**</span> | **IE** || 
| <span style="color: lightgreen">**10.5**</span> | **Opera** || 
| <span style="color: lightgreen">**4**</span> | **Safari** || 
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)