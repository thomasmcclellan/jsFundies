##### 3/05/2020
# `Math.expm1()`

```js
console.log(Math.expm1(0)); // 1
console.log(Math.expm1(1)); // 1.718281828459045
console.log(Math.expm1(-1)); // -0.6321205588285577
console.log(Math.expm1(2)); // 6.38905609893065
```

---

## Syntax:
`Math.expm1(x)`

* **x**: a number

## Return value:
A number representing `e**x - 1`, where `e` is Euler's number and `x` is the argument.

---

## Description:
The `Math.expm1()` method returns `e**x - 1`, where `x` is the argument, and `e` is [Euler's number (also known as Napier's constant)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E), the base of the natural logarithms.

  > Because `expm1()` is a static method of `Math`, you always use it as `Math.expm1()`, rather than as a method of a `Math` object you created, (`Math` is not a constructor).

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `expm1()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1)