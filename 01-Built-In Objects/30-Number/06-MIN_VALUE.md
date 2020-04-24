##### 4/13/2020
# `Number.MIN_VALUE`

```js
function multiply(x, y) {
  if (x * y < Number.MIN_VALUE) {
    return 'Process as -Infinity';
  }
  return (x * y);
}

console.log(multiply(5e-324, 1)); // 5e-324
console.log(multiply(-1.7976931348623157e+308, 2)); // Process as -Infinity
```

---

## Description:
The `Number.MIN_VALUE` property represents the smallest positive numeric value representable in `JS`.

| Property Attributes of `MIN_VALUE` ||
|---|---|
| Writable | no |
| Enumerable | no |
| Configurable | no |

The `MIN_VALUE` property is the number closest to 0, not the most negative number, that `JS` can represent.

`MIN_VALUE` has a value of approximately `5e-324`. Values smaller than `MIN_VALUE` ("underflow values") are converted to 0.

  > Because `MIN_VALUE` is a static property of `Number`, you always use it as `Number.MIN_VALUE`, rather than as a property of a `Number` object you created.

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
| `MIN_VALUE` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**1**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**4**</span> | **IE** || 
| <span style="color: lightgreen">**3**</span> | **Opera** || 
| <span style="color: lightgreen">**1**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**10.1**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**1**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.1.100**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE)