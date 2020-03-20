##### 3/20/2020
# `Math.pow()`

```js
console.log(Math.pow(7, 3)); // 343
console.log(Math.pow(4, 0.5)); //2
console.log(Math.pow(7, -2)); // 0.020408163265306124
console.log(Math.pow(-7, 0.5)); // NaN
```

---

## Syntax:
`Math.pow(base, exponent)`

* **base**: the base number
* **exponent**: the exponent used to raise the `base`

## Return value:
A `number` representing the given base taken to the power of the given exponent

---

## Description:
The `Math.pow()` method returns the `base` to the `exponent` power, that is, `base**exponent`.

  > Because `pow()` is a static method of `Math`, you always use it as `Math.pow()`, rather than as a method of a `Math` object (`Math` has no constructor).

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
| `pow()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)