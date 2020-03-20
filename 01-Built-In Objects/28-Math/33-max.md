##### 3/18/2020
# `Math.max()`

```js
const array1 = [1, 3, 2];

console.log(Math.max(1, 3, 2)); // 3
console.log(Math.max(-1, -3, -2)); // -1
console.log(Math.max(...array1)); // 3
```

---

## Syntax:
`Math.max([value1 [, value2 [, ...]]])`

* **value1, value2, ...** (Optional): numbers 

## Return value:
The largest of the given numbers.  If at least one of the arguments cannot be converted to a number, `NaN` is returned.

---

## Description:
The `Math.max()` method returns teh largest of zero or more numbers.

  > Because `Math` is not a constructor, `max()` is a static method of `Math` (you always use it as `Math.max()`, rather than as a method of an instance `Math` object).

`-Infinity` is the initial comparant because almost every other value is bigger, that's why when no arguments are given, `-Infinity` is returned.

If at least one of the arguments cannot be converted to a `number`, the result is `NaN`.

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
| `max()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)