##### 3/03/2020
# `Math.cosh()`

```js
console.log(Math.cosh(0)); // 1
console.log(Math.cosh(1)); // 1.5430806348152437
console.log(Math.cosh(-1)); // 1.5430806348152437
console.log(Math.cosh(2)); // 3.7621956910836314
```

---

## Syntax:
`Math.cosh(x)`

* **x**: a number

## Return value:
The hyperbolic cosine of the given number.

---

## Description:
The `Math.cosh()` method returns the hyperbolic cosine of a number, that can be expressed using the [constant `e`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E): 

  > `Math.cosh(x) = (e**x + e**-x) / 2`

  > Because `cosh()` is a static method of `Math`, you always use it as `Math.cosh()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `cosh()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh)