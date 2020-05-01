##### 5/01/2020
# `Number.prototype.toString()`

```js
function hexColor(c) {
  if (c < 256) return Math.abs(c).toString(16);

  return 0;
}

console.log(hexColor(233)); // e9
console.log(hexColor('11')); // b
```

---

## Syntax:
`numObj.toString([radix])`

* **radix** (Optional): an integer in the ranger 2 through 36 specifying the base to use for representing numeric values.

## Return value:
A `string` representing the specified `Number` object.

## Errors Thrown:
<span style="color: red">**RangeError**</span>: If `toString()` is given a radix less than 2 or greater than 36, a `RangeError` is thrown.

---

## Description:
The `Number.prototype.toString()` method returns a `string` representing the specified `Number` object.

The `Number` object overrides the `toString()` method of the `Object` object. (It does not inherit `Object.prototype.toString()`). For `Number` objects, the `toString()` method returns a `string` representation of the `object` in the specified radix.

The `toString()` method parses its first argument, and attempts to return a `string` representation in the specified _radix_ (base). For radices above 10, the letters of the alphabet indicate numerals greater than 9. For example, for hexadecimal numbers (base 16), `a` through `f` are used.

If the radix is not specified, the preferred radix is assumed to be 10.

If the `numObj` is negative, the sign is preserved. This is the case even if the radix is 2; the `string` returned is the positive binary representation of the `numObj` preceded by a `-` sign, not the two's complement of the `numObj`.

If the `numObj` is not a whole number, the 'dot' sign is used to separate the decimal places.

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
| `toString()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**1**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**3**</span> | **IE** || 
| <span style="color: lightgreen">**4**</span> | **Opera** || 
| <span style="color: lightgreen">**1**</span> | **Safari** || 
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)