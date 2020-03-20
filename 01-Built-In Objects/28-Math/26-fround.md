##### 3/09/2020
# `Math.fround()`

```js
console.log(Math.fround(5.5)); // 5.5
console.log(Math.fround(5.05)); // 5.050000190734863
console.log(Math.fround(5)); // 5
console.log(Math.fround(-5.05)); // -5.050000190734863
```

---

## Syntax:
`Math.fround(doubleFloat)`

* **doubleFloat**: a number.  If the parameter is of a different type, it will get converted to a number or to `NaN` if it cannot be converted

## Return value:
The nearest 32-bit single precision float representation of the given number.

---

## Description:
The `Math.fround()` method returns the nearest [32-bit single precision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) float representation of a `number`.

JavaScript uses 64-bit double floating-point numbers internally, which offer a very high precision. However, sometimes you may be working with 32-bit floating-point numbers, for example if you are reading values from a `Float32Array`. This can create confusion: Checking a 64-bit float and a 32-bit float for equality may fail even though the numbers are seemingly identical.

To solve this, `Math.fround()` can be used to cast the 64-bit float to a 32-bit float. Internally, `JS` continues to treat the number as a 64-bit float, it just performs a "round to even" on the 23rd bit of the mantissa, and sets all following mantissa bits to 0. If the number is outside the range of a 32-bit float, Infinity or -Infinity is returned.

  > Because `fround()` is a static method of `Math`, you always use it as `Math.fround()`, rather than as a method of a `Math` object you created, (`Math` is not a constructor).

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `fround()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**38**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**26**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**25**</span> | **Opera** || 
| <span style="color: lightgreen">**8**</span> | **Safari** || 
| <span style="color: lightgreen">**38**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**38**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**26**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**25**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**8**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**3.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround)