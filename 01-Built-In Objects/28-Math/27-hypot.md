##### 3/10/2020
# `Math.hypot()`

```js
console.log(Math.hypot(3, 4)); // 5
console.log(Math.hypot(5, 12)); // 13
console.log(Math.hypot(3, 4, 5)); // 7.0710678118654755
console.log(Math.hypot(-5)); // 5
```

---

## Syntax:
`Math.hypot([value1 [, value2 [, ...]]])`

* **value1, value2, ...** (Optional): numbers

## Return value:
The square root of the sum of the given arguments.  If at least one of the arguments cannot be converted to a number, `NaN` is returned.

---

## Description:
The `Math.hypot()` method returns the square root of the sum of squares of its arguments.

Calculating the hypotenuse of a right triangle, or the magnitude of a complex number, uses the formula `Math.sqrt(v1 * v1 + v2 * v2)` where `v1` and `v2` are either the sides of the triangle, or the real and complex values.  For calculating distance in 2 or more dimensions, simply add in more squares inside the square root sign, like `Math.sqrt(v1 * v1 + v2 * v2 + v3 * v3 + v4 * v4)`.  

This `function` makes it a little easier and faster, you just call `Math.hypot(v1, v2)` , or `Math.hypot(v1, v2, v3, v4, ...)` .  

It also avoids a problem if the magnitude of your numbers is huge.  The largest number you can represent in `JS`s double floats is `Number.MAX_VALUE = 1.797...e+308` .  If your numbers are larger  than about `1e154`, taking the square of them will result in Infinity, demolishing your results.  For example, `Math.sqrt(1e200 * 1e200 + 1e200 * 1e200) = Infinity` .  If you use `hypot()` instead, you get a good answer `Math.hypot(1e200, 1e200) = 1.4142...e+200`.  This is also true with very small numbers. ` Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0`, but `Math.hypot(1e-200, 1e-200) =1.4142...e-200`, a good answer.

  > Because `hypot()` is a static method of `Math`, you always use it as `Math.hypot()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

  > If no arguments are given, the result is `+0`.

  > If at least one of the arguments cannot be converted to a number, the result is `NaN`.

With one argument, `Math.hypot()` returns the same as `Math.abs()`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `hypot()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**38**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**27**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**25**</span> | **Opera** || 
| <span style="color: lightgreen">**8**</span> | **Safari** || 
| <span style="color: lightgreen">**38**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**38**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**27**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**25**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**8**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**3.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot)