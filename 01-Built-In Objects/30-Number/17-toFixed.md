##### 4/28/2020
# `Number.prototype.toFixed()`

```js
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456)); // 123.46
console.log(financial(0.004)); // 0.00
console.log(financial('1.23e+5')); // 123000.00
```

---

## Syntax:
`numObj.toFixed([digits])`

* **digits** (Optional): the `number` of digits to appear after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values.  If this argument is omitted, it is treated as 0.

## Return value:
A `string` representing a given `number` using fixed-point notation.

## Errors Thrown:
<span style="color: red">**RangeError**</span>: If `digits` is too small or too large.  Values between 0 and 100, inclusive, will not cause a `RangeError`.  Implementations are allowed to support larger and smaller values as chosen.

<span style="color: red">**TypeError**</span>: If this method is invoked on an `object` that is not a `Number`.

---

## Description:
The `Number.prototype.toFixed()` method formats a number using fixed-point notation.

`toFixed()` returns a `strign` representation of `numObj` that does not use exponential notation and has exactly `digits` digits after the decimal point. The `number` is rounded if necessary, and the fractional part is padded with zeroes if necessary so that it has the specified length.  If the absolute value of `numObj` is greater than or equal to `1e+21`, this method simply calls `Number.prototype.toString()` and returns a `string` in exponential notation.

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
| `toFixed()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)