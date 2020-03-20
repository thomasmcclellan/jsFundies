##### 3/19/2020
# `Math.min()`

```js
const array1 = [2, 3, 1];

console.log(Math.min(2, 3, 1)); // 1
console.log(Math.min(-2, -3, -1)); // -3
console.log(Math.min(...array1)); // 1
```

---

## Syntax:
`Math.min([value1 [, value2 [, ...]]])`

* **value1, value2, ...** (Optional): zero or more numbers among which the lowest value will be selected and returned.

## Return value:
The smallest of the given numbers.  If any one or more of the parameters cannot be converted into a number, `NaN` is returned.  The result is `Infinity` if no parameters are provided.

---

## Description:
The static method `Math.min()` returns the lowest-valued number passed into it, or `NaN` if any parameter isn't a number and can't be converted into one.

  > Because `min()` is a static method of `Math`, you always use it as `Math.min()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

If no arguments are given, the result is `Infinity`.

If at least one of arguments cannot be converted to a number, the result is `NaN`.

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
| `min()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**1**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**3**</span> | **IE** || 
| <span style="color: lightgreen">**3**</span> | **Opera** || 
| <span style="color: lightgreen">**1**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**10.1**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**1**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)