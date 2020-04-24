##### 4/23/2020
# `Number.parseFloat()`

```js
function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) return 0;

  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference('4.567abcdefg')); // 28.695307297889173
console.log(circumference('abcdefg')); // 0
```

---

## Syntax:
`Number.parseFloat(value)`

* **value**: the value you want to parse.  This must be a `string` or a `number`

## Return value:
A floating point number.  If the argument is a `number`, the `number` is returned.  If the argument is a `string`, the `string` is parsed as a `number` and the result is returned.  If a `number` cannot be parsed from the argument, this `function` returns `NaN`.

---

## Description:
The `Number.parseFloat()` method pareses an argument and returns a floating point number.  If a number cannot be parsed from the argument, it returns `NaN`.

This method has the same functionality as the global `parseFloat()` method:

```js
Number.parseFloat === parseFloat; // true
```

and is part of `ES2015` (its purpose is modularization of globals). 

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `parseFloat()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**34**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**25**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**21**</span> | **Opera** || 
| <span style="color: lightgreen">**9**</span> | **Safari** || 
| <span style="color: lightgreen">**≤37**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**34**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**25**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**21**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Ye9s**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**2.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat)