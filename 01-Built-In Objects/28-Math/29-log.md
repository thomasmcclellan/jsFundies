##### 3/12/2020
# `Math.log()`

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

// 2 x 2 x 2 = 8
console.log(getBaseLog(2, 8)); // 3

// 5 x 5 x 5 x 5 = 625
console.log(getBaseLog(5, 625)); // 4
```

---

## Syntax:
`Math.log(x)`

* **x**: a number

## Return value:
The natural logarithm (base `e`) of the given number.  If the number is negative, `NaN` is returned.

---

## Description:
The `Math.log()` method returns the natural logarithm (base `e`) of a number.

The `JS` `Math.log()` method is equivalent to `ln(x)` in mathematics.

If the value of `x` is 0, the return value is always `-Infinity`.

If the value of `x` is negative, the return value is always `NaN`.

  > Because `log()` is a static method of `Math`, you always use it as `Math.log()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

  > If you needed the natural log of 2 or 10, use the constants `Math.LN2` or `Math.LN10`.  If you need a logarithm to base 2 or 10, use `Math.log2()` or Math.log10().  If you need a logarithm to other bases, use `Math.log(x) / Math.log(otherBase)` as in the example below; you might want to precalculate `1 / Math.log(otherBase)`.

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
| `log()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log)