##### 4/30/2020
# `Number.prototype.toPrecision()`

```js
function precise(x) {
  return Number.parseFloat(x).toPrecision(4);
}

console.log(precise(123.456)); // 123.5
console.log(precise(0.004)); // 0.004000
console.log(precise('1.23e+5')); // 1.230e+5
```

---

## Syntax:
`numObj.toPrecision([precision])`

* **precision** (Optional): an integer specifying the number of significant digits

## Return value:
A `string` representing a `Number` object in fixed-point or exponential notation rounded to `precision` significant digits.  See the discussion of rounding in the description of the `Number.prototype.toFixed()` method, which also applies to `toPrecision()`.

If the `precision` argument is omitted, behaves as `Number.prototype.toString()`.  If the `precision` argument is a non-integer value, it is rounded to the nearest integer.

## Errors Thrown:
<span style="color: red">**RangeError**</span>: If `precision` is not between 1 and 100 (inclusive), a `RangeError` is thrown.  Implementations are allowed to support larger adn smaller values as well.  `ECMA-262   only requires a precision of up to 21 significant digits.

---

## Description:
The `Number.prototype.toPrecision()` method returns a `string` representing the `Number` object to the specified precision.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `toPrecision()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**1**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**5.5**</span> | **IE** || 
| <span style="color: lightgreen">**7**</span> | **Opera** || 
| <span style="color: lightgreen">**2**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**10.1**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**1**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.1.100**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision)