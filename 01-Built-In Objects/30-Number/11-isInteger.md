##### 4/20/2020
# `Number.isInteger()`

```js
function fits(x, y) {
  if (Number.isInteger(y / x)) return 'Fits!';

  return 'Does NOT fit.';
}

console.log(fits(5, 10)); // Fits!
console.log(fits(5, 11)); // Does NOT fit.
```

---

## Syntax:
`Number.isInteger(value)`

* **value**: the value to be tested for being an integer

## Return value:
A `boolean` indicating whether or not the given value is an integer.

---

## Description:
The `Number.isInteger()` method determines whether the passed value is an integer.

If the target value is an integer, return `true`; otherwise, return `false`.  If the value is `NaN` or `Infinity`, return `false`.  The method will also return `true` for floating point numbers that can be represented as integer.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `isInteger()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**34**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**16**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**21**</span> | **Opera** || 
| <span style="color: lightgreen">**9**</span> | **Safari** || 
| <span style="color: lightgreen">**≤37**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**34**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**16**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**21**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**9**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**2.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)