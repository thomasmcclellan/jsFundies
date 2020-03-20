##### 3/16/2020
# `Math.log1p()`

```js
console.log(Math.log1p(1)); // 0.6931471805599453
console.log(Math.log1p(0)); // 0
console.log(Math.log1p(-1)); // -Infinity
console.log(Math.log1p(-2)); // NaN
```

---

## Syntax:
`Math.log1p(x)`

* **x**: a number

## Return value:
The natural logarithm (base `e`) of 1 plus the given number.  If the number is less than -1, `NaN` is returned.

---

## Description:
The `Math.log1p()` method returns the natural logarithm (base `e`) of `1 + a number`.

  > For very small values of `x`, adding 1 can reduce or eliminate precision.  The double floats used in `JS` give you about 15 digits of precision.  `1 + 1e-15 = 1.000000000000001`, but `1 + 1e-16 = 1.000000000000000` and therefore exactly `1.0` in that arithmetic, because digits past 15 are rounded off.  

When you calculate `log(1 + x)`, you should get an answer very close to `x`, if `x` is small (that's why these are called 'natural' logarithms).  If you calculate `Math.log(1 + 1.1111111111e-15)` you should get an answer close to `1.1111111111e-15`.  Instead, you will end up taking the logarithm of `1.00000000000000111022` (the round off is in binary so sometimes it gets ugly), so you get the answer `1.11022...e-15`, with only  3 correct digits.  If, instead, you calculate `Math.log1p(1.1111111111e-15)` you will get a much more accurate answer `1.1111111110999995e-15` with 15 correct digits of precision (actually 16 in this case).

If the value of `x` is less than -1, the return value is always `NaN`.

  > Because `log1p()` is a static method of `Math`, you always use it as `Math.log1p()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `log1p()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**38**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**25**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**25**</span> | **Opera** || 
| <span style="color: lightgreen">**8**</span> | **Safari** || 
| <span style="color: lightgreen">**38**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**38**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**25**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**25**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**8**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**3.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p)