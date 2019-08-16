##### 5/01/2019
# `Array.prototype.fill()`

```js
let array1 = [1, 2, 3, 4]

// Fill with 0 from postion 2 until position 4
console.log(array1.fill(0, 2, 4)) // [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1)) // [1, 5, 5, 5]

console.log(array1.fill(6)) // [6, 6, 6, 6]
```

---

## Syntax:
`arr.fill(value[, start[, end]])`

* **value**: value to fill an array
* **start (optional)**: start index; defaults to 0
* **end (optional)**: end index; defaults to `this.length`

## Return value:
The modified array

---

## Description:
The `fll` method takes up to three arguments: `value`, `start`, and `end` (see above).

If `start` is negative, it is treated as `length + start` where `length` is the length of the array.  If `end` is negative, it is treated as `length + end`.

`fill` is intentionally generic; it does not require that is `this` value be an Array object.  It is also a mutable method; it will change `this` object itself, and return it--not just return a copy of it.

When `fill` gets passed an object, it will copy the reference and fill the array with references to that object.

---

```js
console.log([1, 2, 3].fill(4)) // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)) // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)) // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)) // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)) // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -3)) // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)) // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)) // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]
console.log([].fill.call({ length: 3 }, 4)) // { 0: 4, 1: 4, 2: 4, length: 3 }
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
| `fill()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**45**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**31**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**8**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**31**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**8**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**4.0.0***</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

  > *From version 0.12: this feature is behind the `--harmony` runtime flag.

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)