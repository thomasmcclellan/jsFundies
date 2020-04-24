##### 4/10/2020
# `Number.MIN_SAFE_INTEGER`

```js
const x = Number.MIN_SAFE_INTEGER - 1,
      y = Number.MIN_SAFE_INTEGER -2;

console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(x); // -9007199254740992
console.log(x === y); // true
```

---

## Description:
The `Number.MIN_SAFE_INTEGER` constant represents the minimum safe integer in `JS` (`-(2**53 - 1)`).  

To represent integers smaller than this, consider using `BinInt`.

| Property Attributes of `MIN_SAFE_INTEGER` ||
|---|---|
| Writable | no |
| Enumerable | no |
| Configurable | no |

The `MIN_SAFE_INTEGER` constant has a value of -9,007,199,254,740,991 (or ~-9 quadrillion).  The reasoning behind that number is that `JS` uses [double-precision floating-point format numbers](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) as specified in [`IEEE 754`](https://en.wikipedia.org/wiki/IEEE_floating_point) and can only safely represent numbers between `-(2**53 -1)` and `2**53 -1`.  See `Number.isSafeInteger()` for more information.

  > Because `MIN_SAFE_INTEGER` is a static property of `Number`, you always use it as `Number.MIN_SAFE_INTEGER`, rather than as a property of a `Number` object you created.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `MIN_SAFE_INTEGER` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**34**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**31**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**21**</span> | **Opera** || 
| <span style="color: lightgreen">**9**</span> | **Safari** || 
| <span style="color: lightgreen">**≤37**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**34**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**31**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**21**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**9**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**2.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER)