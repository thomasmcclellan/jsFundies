##### 2/27/2020
# `Math.ceil()`

```js
console.log(Math.ceil(0.95)); // 1
console.log(Math.ceil(4)); // 4
console.log(Math.ceil(7.004)); // 8
console.log(Math.ceil(-7.004)); // -7
```

---

## Syntax:
`Math.ceil(x)`

* **x**: a number 

## Return value:
The smallest integer greater than or equal to the given number.

---

## Description:
The `Math.ceil()` method always rounds a number up to the next largest whole number or integer.

  > **NOTE**: `Math.ceil(null)` returns integer 0 and does not give a `NaN` error.

  > Because `ceil()` is a static method of `Math`, you always use it as `Math.ceil()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

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
| `ceil()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**1**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**3**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**1**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**1**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)