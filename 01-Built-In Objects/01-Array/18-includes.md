##### 5/10/2019
# `Array.prototype.includes()`

```js
const arr1 = [1, 2, 3]

console.log(arr1.includes(2)) // true

const pets = ['cat', 'dog', 'bat']

console.log(pets.includes('cat')) // true
console.log(pets.includes('bunny')) // false
```

---

## Syntax:
`arr.includes(valueToFind[, fromIndex])`

* **valueToFind**: value to search for
* **fromIndex (optional)**: the position in this array at which to begin searching for `valueToFind`; the first character to be searched is found at `fromIndex` for positive values of `fromIndex`, or at `array.length + fromIndex` for negative values of `fromIndex`.  Default is 0.

## Return value:
A boolean which is `true` if the value of `valueToFind` is found within the array (or part of the array indicated by `fromIndex`, if specified).  Values of 0 are all considered to be equal regardless of sign (0 || -0; but `false` != 0).

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2016 | 2016 | Standard | Initial definition |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `includes()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**47**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**14**</span> | **Edge** || 
| <span style="color: lightgreen">**43**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**34**</span> | **Opera** || 
| <span style="color: lightgreen">**9**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**43**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**34**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**9**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**6.0.0***</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

  > *From version 6.0.0: this feature is behind the `--harmony` runtime flag.

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)