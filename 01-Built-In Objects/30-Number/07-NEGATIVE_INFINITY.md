##### 4/14/2020
# `Number.NEGATIVE_INFINITY`

```js
function checkNumber(smallNumber) {
  if (smallNumber === Number.NEGATIVE_INFINITY) {
    return 'Process number as -Infinity';
  }
  return smallNumber;
}

console.log(checkNumber(-Number.MAX_VALUE)); // -1.7976931348623157e+308
console.log(checkNumber(-Number.MAX_VALUE * 2)); // Process number as -Infinity
```

---

## Description:
The `Number.NEGATIVE_INFINITY` property represents the negative `Infinity` value

| Property Attributes of `NEGATIVE_INFINITY` ||
|---|---|
| Writable | no |
| Enumerable | no |
| Configurable | no |

The value of `Number.NEGATIVE_INFINITY` is the same as the negative value of the global object's `Infinity` property.

This value behaves slightly differently than mathematical infinity:
  * Any positive value, including `POSITIVE_INFINITY`, multiplied by `NEGATIVE_INFINITY` is `NEGATIVE_INFINITY`.
  * Any negative value, including `NEGATIVE_INFINITY`, multiplied by `NEGATIVE_INFINITY` is `POSITIVE_INFINITY`.
  * Any positive value divided by `NEGATIVE_INFINITY` is negative zero.
  * Any negative value divided by ``NEGATIVE_INFINITY`` is positive zero.
  * Zero multiplied by `NEGATIVE_INFINITY` is `NaN`.
  * `NaN` multiplied by `NEGATIVE_INFINITY` is `NaN`.
  * `NEGATIVE_INFINITY`, divided by any negative value except `NEGATIVE_INFINITY`, is `POSITIVE_INFINITY`.
  * `NEGATIVE_INFINITY`, divided by any positive value except `POSITIVE_INFINITY`, is `NEGATIVE_INFINITY`.
  * `NEGATIVE_INFINITY`, divided by either `NEGATIVE_INFINITY` or `POSITIVE_INFINITY`, is `NaN`.

You might use the Number.`NEGATIVE_INFINITY` property to indicate an error condition that returns a finite number in case of success. Note, however, that `isFinite` would be more appropriate in such a case.

  > Because `NEGATIVE_INFINITY` is a static property of `Number`, you always use it as `Number.NEGATIVE_INFINITY`, rather than as a property of a `Number` object you created. 

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
| `NEGATIVE_INFINITY` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY)