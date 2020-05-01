##### 4/27/2020
# `Number.prototype.toExponential()`

```js
function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

console.log(expo(123456, 2)); // 1.23e+5
console.log(expo('123456')); // 1.23456e+5
console.log(expo('oink')); // NaN
```

---

## Syntax:
`numbObj.toExponential([fractionDigits])`

* **fractionDigits** (Optional): an integer specifying the number of digits after the decimal point.  Defaults to as many digits as necessary to specify the number

## Return value:
A `string` representing the given `Number` object in exponential notation with one digit before the decimal point, rounded to `fractionDigits` digits after the decimal point.

## Errors Thrown:
<span style="color: red">**RangeError**</span>: If `fractionDigits` is too small or too large.  Values between 0 and 20, inclusive, will not cause a `RangeError`.  Implementations are allowed to support larger adn smaller values as well.

<span style="color: red">**TypeError**</span>: If this method is invoked on an `object` that is not a `Number`. 

---

## Description:
The `Number.prototype.toExponential()` method returns a `string` representing the `Number` object in exponential notation.

If the `fractionDigits` argument is omitted, the number of digits after the decimal point defaults to the number of digits necessary to represent the value uniquely.

If you use the `toExponential()` method for a numeric literal and the numeric literal has no exponent and no decimal point, leave whitespace(s) before the dot that precedes the method call to prevent the dot from being interpreted as a decimal point.

If a number has more digits than requested by the `fractionDigits` parameter, the number is rounded to the nearest number represented by `fractionDigits` digits. See the discussion of rounding in the description of the `toFixed()` method, which also applies to `toExponential()`.

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
| `toExponential()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential)